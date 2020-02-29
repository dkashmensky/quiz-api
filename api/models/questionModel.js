'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var QuestionSchema = new Schema({
  category: {
    type: String,
    required: 'Provide question category'
  },
  type: {
    type: String,
    required: 'Provide question type'
  },
  difficulty: {
    type: String,
    required: 'Provide question difficulty'
  },
  question: {
    type: String,
    required: 'Provide question text'
  },
  correct_answer: {
    type: String,
    required: 'Provide question correct answer'
  },
  incorrect_answers: {
    type: String,
    required: 'Provide question incorrect answer'
  },
  id: {
    type: String,
    required: 'Provide question id'
  },
});

module.exports = mongoose.model('Questions', QuestionSchema);