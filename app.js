angular.module('mainApp', [])
  .factory('Data', function() {
    return {message: "Coming from Service"};
  })
  .controller('FirstCtrl', ['$scope', 'Data', function($scope, Data) {
    $scope.data = Data;
   }])
  .controller('SecondCtrl', ['$scope', 'Data', function($scope, Data) {
    $scope.data = Data;
    $scope.reverseText = function(text) {
      return text.split("").reverse().join("");
    }
  }]);
