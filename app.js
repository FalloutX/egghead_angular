angular.module('mainApp', [])
  .factory('Data', function() {
    return {message: "Coming from Service"};
  })
  .filter('reverse', function() {
    return function(text) {
      return text.split("").reverse().join("");
    };
  })
  .controller('FirstCtrl', ['$scope', 'Data', function($scope, Data) {
    $scope.data = Data;
   }])
  .controller('SecondCtrl', ['$scope', 'Data', function($scope, Data) {
    $scope.data = Data;

  }]);
