'use strict';

// Setting up route
angular.module('categories').config(['$stateProvider',

  function($stateProvider) {
    // Category state routing
    $stateProvider
      .state('categorieslista', {
        url: '/categories',
        templateUrl: '/modules/categories/views/categories.client.view.html',
        controller: 'CategoryController',
        controllerAs: 'vm'
      })
      .state('categoriescreate', {
        url: '/categories/create',
        templateUrl: '/modules/categories/views/categories.client.create.view.html',
        controller: 'CategoryController',
        controllerAs: 'vm'
      });
  }
]);

//modules/users/client/views/settings/categories.client.view.html
//modules/users/client/views/settings/settings.client.view.html