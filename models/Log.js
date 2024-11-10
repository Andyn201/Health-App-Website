const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LogSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId
  },
  grains: {
    type: String,
    required: true
  },
  vegetables: {
    type: String,
    required: true
  },
  fruits: {
    type: String,
    required: true
  },
  proteins: {
    type: String,
    required: true
  },
  dairy: {
    type: String,
    required: true
  },
  drink: {
    type: String,
    required: true
  },
  meals: {
    type: String,
    required: true
  },
  snacks_or_dessert: {
    type: String,
    required: true
  },
  workout: {
    type: String,
    required: true
  },
  workout_length: {
    type: String,
    required: true
  },
  workout_intensity:{
    type: String,
    required: true
  },
  injury: {
    type: String,
    required: true
  },
  hours_of_sleep: {
    type: String,
    required: true
  },
  sleep_quality: {
    type: String,
    required: true
  },
  fatigue_level: {
    type: String,
    required: true
  },
  stress_level: {
    type: String,
    required: true
  },
  pain_level: {
    type: String,
    required: true,
    default: '2'
  },
  smoke_or_drink: {
    type: String,
    required: true
  },
  weight: {
    type: String,
    required: true
  },
  notes: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('log', LogSchema);
