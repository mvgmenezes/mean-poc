(function () {
  'use strict';

  //Setting up route
  angular
    .module('categories')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    // Category state routing
    $stateProvider
      .state('categories', {
        url: '/categories',
        templateUrl: 'modules/categories/client/views/category.client.view.html',
        controller: 'CategoryController',
        controllerAs: 'vm'
      });
  }
})();
