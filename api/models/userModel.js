'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  id: {
    type: String,
    required: 'Provide user id'
  },
  name: {
    type: String,
    required: 'Provide user fullname'
  },
  username: {
    type: String,
    required: 'Provide username'
  },
  password: {
    type: String,
    required: 'Provide user password'
  }
});

module.exports = mongoose.model('Users', UserSchema);