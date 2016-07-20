angular.module('mainApp', [])
  .controller('FirstCtrl', ['$scope', function($scope) {
    $scope.data = {message: "Andy"};
   }])
  .controller('SecondCtrl', ['$scope', function($scope) {
    $scope.data = {message: "Loki"};
  }]);
