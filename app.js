angular.module('mainApp', [])
  .factory('Data', function() {
    return {message: "Coming from Service"};
  })
  .controller('FirstCtrl', ['$scope', 'Data', function($scope, Data) {
    $scope.data = Data;
   }])
  .controller('SecondCtrl', ['$scope', 'Data', function($scope, Data) {
    $scope.data = Data;
  }]);
