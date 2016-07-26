angular.module('phoneApp', [])
  .controller('AppCtrl', [ '$scope', function($scope) {
    $scope.callHome = function (message) {
      alert("Called " + message);
    };
  }])
  .directive('phone', function() {
    return {
      restrict: 'A',
      scope: {
        dial: "&"
      },
      template: '<input type="text" ng-model="value">' +
                '<div class="button" ng-click="dial({message:value})"> Call </div>'
    }
  })
  ;
