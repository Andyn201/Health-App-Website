const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  resetToken: {
    type: String,
    default: null
  },
  resetTokenExpiration: {
    type: Date,
    default: null
  },
  stripeCustomerId: {
    type: String,
    default: null
  },
  stripePaymentMethodId: {
    type: String,
    default: null
  },
  StripeType: {
    type: String,
    default: ''
  },
  StripeLast4: {
    type: String,
    default: ''
  },
  stripeSubscriptionMethodId: {
    type: String,
    default: null
  },
  date: {
    type: Date,
    default: Date.now
  },
  plan: {
    type: String,
    default: 'free'
  },
  daemon: {
    type: String,
    default: 'nine'
  },
  handbook: {
    type: Boolean,
    default: false
  },
});

module.exports = mongoose.model('user', UserSchema);