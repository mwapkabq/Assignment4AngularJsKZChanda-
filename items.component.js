// Create the items component
angular.module('MenuApp')
  .component('items', {
    templateUrl: 'items.template.html',
    bindings: {
      items: '<'
    }
  });
