const mongoose = require('mongoose');
const validator = require('validator');

const person = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true
  },
  lastname: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if ( !validator.isEmail(value) ) {
        throw new Error('Invalid Email')
      }
    }
  },
})

// We are creating a new collection
const personData = new mongoose.model('person', person);

module.exports = personData;