// Declare the MenuDataService service on the data module
angular.module('data')
  .service('MenuDataService', ['$http', function($http) {
    var service = this;

    service.getAllCategories = function() {
      return $http({
        method: 'GET',
        url: 'https://coursera-jhu-default-rtdb.firebaseio.com/categories.json'
      }).then(function(response) {
        return response.data;
      });
    };

    service.getItemsForCategory = function(categoryShortName) {
      return $http({
        method: 'GET',
        url: 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/' + categoryShortName + '.json'
      }).then(function(response) {
        return response.data;
      });
    };
  }]);
