'use strict';

module.exports = function(app) {

  var categories = require('../../server/controllers/category.server.controller');

   app.route('/categories')
   .get(categories.list)
   .post(categories.create);

   //find by ID
   app.route('/categories/:categoryId')
    .get(categories.read);
};
