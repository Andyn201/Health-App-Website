const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
  },
  message: {
    type: String,
    required: true,
    maxLength: 500
  }
});

module.exports = mongoose.model('appointment', AppointmentSchema);