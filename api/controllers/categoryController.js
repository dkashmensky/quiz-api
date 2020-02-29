'use strict';
var mongoose = require('mongoose'),
  Category = mongoose.model('Categories');


exports.get_cats = function(req, res) {
  Category.find({}, (err, cats) => {
    if(err) {
      res.send(err);
    }

    res.json(cats);
  });
};

exports.create_cat = function(req, res) {
  let newCat = new Category(req.body);
  newCat.save((err, cat) => {
    if(err) {
      res.send(err)
    }

    res.json(cat)
  });
};

exports.get_cat = function(req, res) {
  Category.findOne({id: req.params.userId}, (err, cat) => {
    if(err) {
      res.send(err);
    }

    res.json(cat);
  });
};