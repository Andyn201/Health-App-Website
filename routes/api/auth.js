const express = require('express');
const {validationResult, check} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const sgMail = require('@sendgrid/mail')
require('dotenv').config();

const User = require('../../models/User');
const auth = require('../../middleware/auth');
const router = express.Router();




//   Configure Mail
sgMail.setApiKey(process.env.SENDGRID_API_KEY)






// @route    GET api/auth
// @desc     Get user by token
// @access   Private
router.get('/', auth, async (req, res) => {
	try {
	  const user = await User.findById(req.user.id).select('-password');


	  res.json(user);
	} catch (err) {
	  console.error(err.message);
	  res.status(500).send('Server Error');
	}
});



// @route 		POST api/auth
// @desc		Autheticate User 
// @access		Public
router.post('/', 
[
	check('email', 'Include a valid email').isEmail().normalizeEmail().trim().escape(),
	check('password', 'Include a valid password').exists().trim().escape(),
],

async (req, res) => {
	const errors = validationResult(req);

	if(!errors.isEmpty()){
		return res.status(400).json({errors: errors.array() });
	}

	const {email, password} = req.body;
	
	
	try{

		// See if user exists
		let user = await User.findOne({email});

		if(!user){
			return res.status(400).json({errors: [{ msg: 'Invalid credentials' }]});
		}

		// Check password
		const isMatch = await bcrypt.compare(password, user.password);
		if(!isMatch){
			return res.status(400).json({errors: [{ msg: 'Invalid credentials' }]});
		}


		// Return Token
		const payload = {
			user:{
				id: user.id
			}
		}

		jwt.sign(payload, process.env.JWT_SECRET, 
			{expiresIn: 300000},
			(err, token) => {
				if (err) throw err;
				res.json({token});
			});
		

	}
	catch(err){
		console.error(err.message);
		res.status(500).send('Server Error');
	}

});




// @route    POST api/auth/reset
// @desc     Send forgot password email
// @access   Public
router.post('/reset', 
[
	check('email', 'Include a valid email').isEmail().normalizeEmail().trim().escape()
],

async (req, res) => {

	const errors = validationResult(req);

	if(!errors.isEmpty()){
		return res.status(400).json({errors: errors.array() });
	}

	const {email} = req.body;


		//   Create Reset Token 
	
		const token = crypto.randomBytes(32).toString('hex');

		try {
			const user = await User.findOne({ email: req.body.email });

			if (!user) {
				return res.status(400).json({errors: [{ msg: 'No account with that email found' }]});
			}

			user.resetToken = token;
			user.resetTokenExpiration = Date.now() + 3600000;   //   Second Number of milliseconds
			await user.save();


			// Send email with reset token

			const mailOptions = {
				to: email, // Change to your recipient
				from: process.env.MAIL_USER_NAME, // Change to your verified sender
				subject: 'Password Reset',
				text: 'You requested a password reset',
				html: `<p>Click this <a href="${process.env.URL}/reset/${token}">link</a> to set a new password.</p>`
			  }



			  sgMail
				.send(mailOptions)
				.then(() => {
					return  res.json({ confirmation: 'Message Sent'});
				})
				.catch((error) => {
					console.log(error.response.body);
					return res.status(400).json({errors: [{ msg: 'Message Failure' }]});
				})

		}

		catch(err){
			res.status(500).send('Server Error');
		}
});




// @route    POST api/auth/:token
// @desc     Reset Password
// @access   Public
router.post('/reset/:token', 
[
	check('password', 'Include a valid password. It must be 6 or more characters').isLength({min: 6}).trim().escape()
],

async (req, res) => {

	const errors = validationResult(req);

	if(!errors.isEmpty()){
		return res.status(400).json({errors: errors.array() });
	}

	//   Get Fields

	const newPassword = req.body.password;
	const token = req.params.token;
	let resetUser;
	

	const user = await User.findOne({ resetToken: token, resetTokenExpiration: { $gt: Date.now() } });

	if (!user) {
		return res.status(400).json({errors: [{ msg: 'Invalid Reset Token' }]});
	}

	  try {

		    //   hash password
	
			resetUser = user;
			const hashedPassword = await bcrypt.hash(newPassword, 12);

			resetUser.password = hashedPassword;
			resetUser.resetToken = null;
			resetUser.resetTokenExpiration = null;
			await resetUser.save();

			res.json({
				confirmation: 'Password Has Been Reset'
			});

	  }
	  
	  catch(err){
		res.status(500).send('Server Error');
	  }
 
});



// @route    DELETE api/auth
// @desc     Cancel Membership
// @access   private
router.delete('/', auth, async (req, res) => {


	try {

		// Cancel Subscription And Remove User

		const user = await User.findById(req.user.id).select('-password');
		 
		 await stripe.customers.del(
			user.stripeCustomerId
	 	);

		await User.findOneAndRemove({_id: req.user.id});

		res.json({msg: 'User deleted'});
	}
	catch(err){
		console.error(err.message);
		res.status(500).send('Server error');
	}
  });





// @route    POST api/auth/upgrade
// @desc     Upgrade Plan
// @access   private
router.post('/upgrade', auth, async (req, res) => {
		try {
			const user = await User.findById(req.user.id).select('-password');
		
			// Create Subscription
			const subscription = await stripe.subscriptions.create({
				customer: user.stripeCustomerId,
				items: [{ price: process.env.STRIPE_SUBSCRIPTION_ID }],
				expand: ['latest_invoice.payment_intent'],
			});


			// Save Subscription To DB
			user.stripeSubscriptionMethodId = subscription.id;
			user.plan = "platinum";

			await user.save();

			// Send Message
			res.json({confirmation: 'Plan Has Been Upgraded To Platinum.'});
						
		}
		catch(err){
			console.error(err.message);
			res.status(500).send('Error, Unable To Upgrade Plan');
		}

	}
);







// @route    POST api/auth/downgrade
// @desc     Downgrade Plan
// @access   private
router.post('/downgrade', auth, async (req, res) => {
		try {
			const user = await User.findById(req.user.id).select('-password');
		
			// Cancel Subscription
			//await stripe.subscriptions.del(user.stripeSubscriptionMethodId);
			await stripe.subscriptions.update(user.stripeSubscriptionMethodId, {cancel_at_period_end: true});

			// Send Message
			res.json({ confirmation: 'Your Plan Has Been Downgraded. You Will Still Be Able To Access Platinum Until The End Of The Billing Period.' });
		}
		catch(err){
			console.error(err.message);
			res.status(500).send('Error, Unable To Downgrade Plan');
		}

	}
);







// @route    POST api/auth/stripe-webhook
// @desc     Stripe Webhook
// @access   public
router.post(
	'/stripe-webhook',
	async (req, res) => {
	  // Retrieve the event by verifying the signature using the raw body and secret.
	

	try {

		const event = req.body;


		// Extract the object from the event.
		const dataObject = event.data.object;

		const user = await User.findOne({ stripeCustomerId: dataObject.customer }).select('-password');
		const email = user.email;

		if(!user){
			return res.status(400).json({errors: [{ msg: 'No User' }]});
		}

		else if((event.type === 'customer.subscription.deleted') || (event.type === 'invoice.payment_failed')) {
				// Save Subscription To DB
				user.plan = "free";


				let saveUser = await user.save();
				console.log(saveUser); 

				return res.sendStatus(200);
		}

		else if(event.type === 'customer.subscription.trial_will_end'){
			const mailOptions = {
				to: email, // Change to your recipient
				from: process.env.MAIL_USER_NAME, // Change to your verified sender
				subject: 'Seryph - Free Trial Ending In Three Days',
				text: 'Your trial will be ending in three days. That means you will charged $100 in three days to continue using our service. If you like the service, please stay on. If you do not, please switch to the free plan in your account section. Thanks',
			  }



			  sgMail
				.send(mailOptions)
				.then(() => {
					return  res.json({ confirmation: 'Message Sent'});
				})
				.catch((error) => {
					console.log(error.response.body);
					return res.status(400).json({errors: [{ msg: 'Message Failure' }]});
				})
		}

}
catch(err){
	return res.status(400).json({errors: [{ msg: 'Error' }]});
}
	res.sendStatus(200);
  

	/*
	  // Handle the event
	  // Review important events for Billing webhooks
	  // https://stripe.com/docs/billing/webhooks
	  // Remove comment to see the various objects sent for this sample
	  switch (event.type) {
		case 'invoice.paid':
		  // Used to provision services after the trial has ended.
		  // The status of the invoice will show up as paid. Store the status in your
		  // database to reference when a user accesses your service to avoid hitting rate limits.
		  break;
		case 'invoice.payment_failed':
		  // If the payment fails or the customer does not have a valid payment method,
		  //  an invoice.payment_failed event is sent, the subscription becomes past_due.
		  // Use this webhook to notify your user that their payment has
		  // failed and to retrieve new card details.

				// Save Subscription To DB
				user.plan = "free";


		  break;
		case 'customer.subscription.deleted':
			// handle a subscription cancelled by your request
			// from above.
			

			try {
				// Save Subscription To DB
				console.log(1);
				user.plan = "free";

				await user.save();
			}
			catch(err){
				return res.status(400).json({errors: [{ msg: 'Error' }]});
			}


		  break;
		default:
		// Unexpected event type

	  }

	  */
});





module.exports = router;

