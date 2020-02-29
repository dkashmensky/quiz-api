'use strict';
var mongoose = require('mongoose'),
  User = mongoose.model('Users');


exports.get_users = function(req, res) {
  User.find({}, (err, users) => {
    if(err) {
      res.send(err);
    }

    res.json(users);
  });
};

exports.create_user = function(req, res) {
  let newUser = new User(req.body);
  newUser.save((err, user) => {
    if (err) {
      res.send(err);
    }
      
    res.json(user);
  });
};

exports.get_user = function(req, res) {
  User.findOne({id: req.params.userId}, (err, user) => {
    if (err) {
      res.send(err);
    }
  
    res.json(user);
  });
};