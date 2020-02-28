'use strict';
module.exports = function(app) {
  var userController = require('../controllers/userController');

  app.route('/users')
    .get(userController.get_users)
    .post(userController.create_user);

  app.route('/users/:userId')
    .get(userController.get_user)
    .put(userController.update_user);
};