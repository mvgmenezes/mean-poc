(function() {
  'use strict';

  angular
    .module('categories')
    .controller('CategoryController', CategoryController);

  CategoryController.$inject = ['$scope'];

  function CategoryController($scope) {
    var vm = this;

    // Category controller logic
    // ...

    init();

    function init() {
    }
  }
})();
