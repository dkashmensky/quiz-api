'use strict';
module.exports = function(app) {
  var userController = require('../controllers/userController'),
      catController = require('../controllers/categoryController');

  app.route('/users')
    .get(userController.get_users)
    .post(userController.create_user);

  app.route('/users/:userId')
    .get(userController.get_user)
    .put(userController.update_user);

  app.route('/categories/')
    .get(catController.get_cats)
    .post(catController.create_cat);

  app.route('/categories/:catId')
    .get(catController.get_cat)
    .put(catController.update_cat);
};