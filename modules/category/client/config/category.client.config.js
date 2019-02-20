(function() {
  'use strict';

  // Category module config
  angular
    .module('category')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(Menus) {
    // Config logic

    Menus.addMenuItem('topbar', {
      title: 'Categorias',
      state: 'categories',
      type: 'dropdown',
      url: '/categories(/create)?'
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'categories', {
      title: 'List Categories',
      state: 'categories'
    });

     // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'categories', {
      title: 'Create categories',
      state: 'categories.create'
    });

  }
})();
