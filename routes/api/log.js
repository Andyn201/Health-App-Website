const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Log = require('../../models/Log');
const checkObjectId = require('../../middleware/checkObjectId');

// @route    POST api/log
// @desc     Create a log
// @access   Private
router.post(
  '/',
  auth,
  check('grains', 'Please use normal letters').not().isEmpty().trim().escape(),
  check('vegetables', 'Please use normal letters').not().isEmpty().trim().escape(),
  check('fruits', 'Please use normal letters').not().isEmpty().trim().escape(),
  check('proteins', 'Please use normal letters').not().isEmpty().trim().escape(),
  check('dairy', 'Please use normal letters').not().isEmpty().trim().escape(),
  check('drink', 'Drinks are required').not().isEmpty().trim().escape(),
  check('meals', 'Number of meals is required').not().isEmpty().trim().escape(),
  check('snacks_or_dessert', 'Snacks Or dessert is required').not().isEmpty().trim().escape(),
  check('workout', 'Workout is required').not().isEmpty().trim().escape(),
  check('workout_length', 'Workout length is required').not().isEmpty().trim().escape(),
  check('workout_intensity', 'Workout intensity is required').not().isEmpty().trim().escape(),
  check('injury', 'Were you injured?').not().isEmpty().isNumeric().trim().escape(),
  check('hours_of_sleep', 'Hours of sleep required').not().isEmpty().trim().escape(),
  check('sleep_quality', 'Sleep quality required').not().isEmpty().trim().escape(),
  check('fatigue_level', 'Fatigue level required').not().isEmpty().trim().escape(),
  check('stress_level', 'Stress level required').not().isEmpty().trim().escape(),
  check('pain_level', 'Pain level required').trim().escape(),
  check('smoke_or_drink', 'Did you smoke or drink?').not().isEmpty().trim().escape(),
  check('weight', 'What is your weight').not().isEmpty().trim().escape(),
  check('notes', 'Any other notes').trim().escape(),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {

      const newLog = new Log({
        user: req.user.id,
        grains: req.body.grains,
        vegetables: req.body.vegetables,
        fruits: req.body.fruits,
        proteins: req.body.proteins,
        dairy: req.body.dairy,
        drink: req.body.drink,
        meals: req.body.meals,
        snacks_or_dessert: req.body.snacks_or_dessert,
        workout: req.body.workout,
        workout_length: req.body.workout_length,
        workout_intensity: req.body.workout_intensity,
        injury: req.body.injury,
        hours_of_sleep: req.body.hours_of_sleep,
        sleep_quality: req.body.sleep_quality,
        fatigue_level: req.body.fatigue_level,
        stress_level: req.body.stress_level,
        pain_level: req.body.pain_level,
        smoke_or_drink: req.body.smoke_or_drink,
        weight: req.body.weight,
        notes: req.body.notes,
      });

      const log = await newLog.save();

      res.json(log);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);



// @route    GET api/log
// @desc     Get all logs
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    let logs = await Log.find({ user: req.user.id });
    logs.reverse();
    res.json(logs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


// @route    GET api/log/:id
// @desc     Get log by ID
// @access   Private
router.get('/:id', auth, checkObjectId('id'), async (req, res) => {
  try {
    const log = await Log.findById(req.params.id);

    if (!log) {
      return res.status(404).json({ msg: 'Log not found' });
    }

    res.json(log);
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});



// @route    PUT api/log/:id
// @desc     Edit log by ID
// @access   Private
router.put(
  '/:id', auth, checkObjectId('id'),
  check('grains', 'Please use normal letters').trim().escape(),
  check('vegetables', 'Please use normal letters').trim().escape(),
  check('fruits', 'Please use normal letters').trim().escape(),
  check('proteins', 'Please use normal letters').trim().escape(),
  check('dairy', 'Please use normal letters').trim().escape(),
  check('drink', 'Drinks are required').trim().escape(),
  check('meals', 'Number of meals is required').trim().escape(),
  check('snacks_or_dessert', 'Snacks or dessert is required').trim().escape(),
  check('workout', 'Workout is required').trim().escape(),
  check('workout_length', 'Workout length is required').trim().escape(),
  check('workout_intensity', 'Workout intensity is required').trim().escape(),
  check('injury', 'Were you injured?').trim().escape(),
  check('hours_of_sleep', 'Hours of sleep required').trim().escape(),
  check('sleep_quality', 'Sleep quality required').trim().escape(),
  check('fatigue_level', 'Fatigue level required').trim().escape(),
  check('stress_level', 'Stress level required').trim().escape(),
  check('pain_level', 'Pain level required').trim().escape(),
  check('smoke_or_drink', 'Did you smoke or drink?').trim().escape(),
  check('weight', 'What is your weight').trim().escape(),
  check('notes', 'Any other notes').trim().escape(),
  
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {

      const log = await Log.findById(req.params.id);

      if (!log) {
        return res.status(404).json({ msg: 'Log not found' });
      }

        log.user = req.user.id;
        log.grains = req.body.grains;
        log.vegetables = req.body.vegetables;
        log.fruits = req.body.fruits;
        log.proteins = req.body.proteins;
        log.dairy = req.body.dairy;
        log.drink = req.body.drink;
        log.meals = req.body.meals;
        log.snacks_or_dessert = req.body.snacks_or_dessert;
        log.workout = req.body.workout;
        log.workout_length = req.body.workout_length;
        log.workout_intensity = req.body.workout_intensity;
        log.injury = req.body.injury;
        log.hours_of_sleep = req.body.hours_of_sleep;
        log.sleep_quality = req.body.sleep_quality;
        log.fatigue_level = req.body.fatigue_level;
        log.stress_level = req.body.stress_level;
        log.pain_level = req.body.pain_level;
        log.smoke_or_drink = req.body.smoke_or_drink;
        log.weight = req.body.weight;
        log.notes = req.body.notes;

      const updatedlog = await log.save()

      res.json(updatedlog);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);





// @route    DELETE api/log/:id
// @desc     Delete a log
// @access   Private
router.delete('/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    const log = await Log.findById(req.params.id);

    if (!log) {
      return res.status(404).json({ msg: 'Log not found' });
    }

    // Check user
    if (log.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await log.remove();

    res.json({ msg: 'Log removed' });
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});









module.exports = router;
