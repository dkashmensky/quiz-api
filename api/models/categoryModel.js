'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CategorySchema = new Schema({
  id: {
    type: String,
    required: 'Provide category id'
  },
  name: {
    type: String,
    required: 'Provide category name'
  },
  img: {
    type: String,
    required: 'Provide category image link'
  },
});

module.exports = mongoose.model('Categories', CategorySchema);