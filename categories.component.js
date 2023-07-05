// Create the categories component
angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'categories.template.html',
    bindings: {
      categories: '<'
    }
  });
