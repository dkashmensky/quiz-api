'use strict';
module.exports = function(app) {
  var userController = require('../controllers/userController'),
      catController = require('../controllers/categoryController');

  app.route('/users')
    .get(userController.get_users)
    .post(userController.create_user);

  app.route('/users/:userId')
    .get(userController.get_user);

  app.route('/category')
    .get(catController.get_cats)
    .post(catController.create_cat);

  app.route('/category/:catId')
    .get(catController.get_cat);
};