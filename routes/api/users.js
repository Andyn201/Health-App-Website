const express = require('express');
const {validationResult, check} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const Mailchimp = require('mailchimp-api-v3')
// const mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY);
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
require('dotenv').config();

const User = require('../../models/User');
const router = express.Router();



// @route 		GET api/users/platinum
// @desc		Get All Platinum Users
// @access		Private
router.get('/platinum', auth, async (req, res) => {
	try {
	  const users = await User.find({plan: "platinum" }).select('-password');


	  res.json(users);
	} catch (err) {
	  console.error(err.message);
	  res.status(500).send('Server Error');
	}
});



// @route 		POST api/users
// @desc		Register User
// @access		Public
router.post('/', 
[
	check('name', 'Name is required').not().isEmpty().trim().escape(),
	check('email', 'Please include a valid email').isEmail().normalizeEmail().trim().escape(),
	check('password', 'Please include a valid password It must be 6 or more characters').isLength({min: 6}).trim().escape(),
	check('card_name', 'Please add the name on the card').not().isEmpty().trim().escape(),
	check('card_number', 'Please add the card number').not().isEmpty().trim().escape(),
	check('exp_month', 'Please add the expiration month on the card').isNumeric().trim().escape(),
	check('exp_year', 'Please add the expiration year on the card').isNumeric().trim().escape(),
	check('cvc', 'Please add a cvc').not().isEmpty().trim().escape(),
],

async (req, res) => {
	const errors = validationResult(req);

	if(!errors.isEmpty()){
		return res.status(400).json({errors: errors.array() });
	}

	const {name, email, password, card_name, card_number,  exp_month, exp_year, cvc} = req.body;
	
	
	try{

		// See if user exists
		let user = await User.findOne({email});

		if(user){
			return res.status(400).json({errors: [{ msg: 'User already exists' }]});
		}
  

		// Create Stripe Customer
		const customer = await stripe.customers.create({
			email: email
		});


		// Create payment method
		const payment_method = await stripe.paymentMethods.create({
			type: 'card',
			billing_details: {
				name: card_name
			},
			card: {
			number: card_number,
			exp_month: exp_month,
			exp_year: exp_year,
			cvc: cvc,
			},
		});

		
		// Attach Payment Method
		await stripe.paymentMethods.attach(payment_method.id, {
			customer: customer.id,
		  });

		// Set default payment method
		await stripe.customers.update(
			customer.id,
			{
			  invoice_settings: {
				default_payment_method: payment_method.id,
			  },
			}
		  );

		const payment_data = await stripe.paymentMethods.retrieve(
			payment_method.id
		);

		// Create Subscription
		const subscription = await stripe.subscriptions.create({
			customer: customer.id,
			items: [{ price: process.env.STRIPE_SUBSCRIPTION_ID }],
			expand: ['latest_invoice.payment_intent'],
		});


		// Create New User
		user = new User({
			name: name,
			email: email,
			password: password,
			plan: "platinum",
			stripeCustomerId: customer.id,
			stripePaymentMethodId: payment_method.id,
			StripeType: payment_data.card.brand,
			StripeLast4: payment_data.card.last4,
			stripeSubscriptionMethodId: subscription.id
		});

		// Encrypt Password
		const salt = await bcrypt.genSalt(10);
		user.password = await bcrypt.hash(password, salt);



		// Save User to DB
		await user.save();

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







// @route 		POST api/users/billing
// @desc		Update Billing User
// @access		Private
router.post('/billing', auth,
	[
		check('card_name', 'Please add the name on the card').not().isEmpty().trim().escape(),
		check('card_number', 'Please add the card number').not().isEmpty().trim().escape(),
		check('exp_month', 'Please add the expiration month on the card').isNumeric().trim().escape(),
		check('exp_year', 'Please add the expiration year on the card').isNumeric().trim().escape(),
		check('cvc', 'Please add a cvc').not().isEmpty().trim().escape(),
	],
	async (req, res) => {

		const errors = validationResult(req);

		if(!errors.isEmpty()){
			return res.status(400).json({errors: errors.array() });
		}

		const {card_name, card_number, exp_month, exp_year, cvc} = req.body;

		try {

			const user = await User.findById(req.user.id).select('-password');

			
			// Create payment method
			const payment_method = await stripe.paymentMethods.create({
				type: 'card',
				billing_details: {
					name: card_name
				},
				card: {
				number: card_number,
				exp_month: exp_month,
				exp_year: exp_year,
				cvc: cvc,
				},
			});

			
			// Attach Payment Method
			await stripe.paymentMethods.attach(payment_method.id, {
				customer: user.stripeCustomerId,
			  });

			// Set default payment method
			await stripe.customers.update(
				user.stripeCustomerId,
				{
				  invoice_settings: {
					default_payment_method: payment_method.id,
				  },
				}
			  );

			const payment_data = await stripe.paymentMethods.retrieve(
				payment_method.id
			);
	

			// Save Payment Method To DB
			user.stripePaymentMethodId = payment_method.id;
			user.StripeType = payment_data.card.brand;
			user.StripeLast4 = payment_data.card.last4;
			
			await user.save();

			// Return Response
			return  res.json({ confirmation: 'Billing Successfully Updated'});
		}
		catch(err){
			console.error(err.message);
			res.status(500).send('Error, Unable To Update Billing');
		}
	}
);



module.exports = router