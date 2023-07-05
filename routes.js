// Configure routes and view states
angular.module('MenuApp')
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    // Define home state
    $stateProvider.state('home', {
      url: '/',
      template: '<h1>Welcome to our Restaurant</h1>'
    });

    // Define categories state
    $stateProvider.state('categories', {
      url: '/categories',
      templateUrl: 'categories.template.html',
      controller: 'CategoriesController as categoriesCtrl',
      resolve: {
        categoriesData: ['MenuDataService', function(MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    });

    // Define items state
    $stateProvider.state('items', {
      url: '/items/{categoryShortName}',
      templateUrl: 'items.template.html',
      controller: 'ItemsController as itemsCtrl',
      resolve: {
        itemsData: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        }]
      }
    });

    // Redirect to home state if URL does not match any state
    $urlRouterProvider.otherwise('/');
  }]);
