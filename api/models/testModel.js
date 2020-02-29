'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TestSchema = new Schema({
  id: {
    type: String,
    required: 'Provide test id'
  },
  name: {
    type: String,
    required: 'Provide test name'
  },
  category_id: {
    type: String,
    required: 'Provide test category id'
  },
  desc: {
    type: String,
    required: 'Provide test description'
  },
  question_ids: {
    type: String,
    required: 'Provide test questions'
  },
  time: {
    type: String,
    required: 'Provide test time'
  }
});

module.exports = mongoose.model('Tests', TestSchema);