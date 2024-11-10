const express = require('express');
const {validationResult, check} = require('express-validator');
const auth = require('../../middleware/auth');
const Appointment = require('../../models/Appointment');

const router = express.Router();


// @route    GET api/admin/appointments
// @desc     Get all appointments
// @access   Private
router.get('/appointments', auth, async (req, res) => {
    try {
      let appointments = await Appointment.find();
      res.json(appointments);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });



// @route    POST api/log
// @desc     Create a log
// @access   Private
router.post(
  '/appointments',
  auth,
  check('name', 'Please add your name').not().isEmpty().trim().escape(),
  check('email', 'Please add your name').not().isEmpty().trim().escape(),
  check('phone', 'Please add your phone').trim().escape(),
  check('message', 'Please add your message').not().isEmpty().trim().escape(),
  
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {

      const newAppointment = new Appointment({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message,
      });

      await newAppointment.save();

      
      // Return Response
			return  res.json({ confirmation: 'Application Sent'});

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);







// @route    DELETE api/admin/appointments/:id
// @desc     Delete an appointment
// @access   Public
router.delete('/appointments/:id', async (req, res) => {
    try {
      const appointment = await Appointment.findById(req.params.id);
  
      if (!appointment) {
        return res.status(404).json({ msg: 'Appointment not found' });
      }
  
      await appointment.remove();
  
      res.json({ msg: 'Appointment cancelled' });
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });
  





module.exports = router;