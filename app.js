angular.module('drinkApp', [])
  .controller('AppCtrl', ['$scope', function ($scope) {
    $scope.ctrlFlavor = "blackberry";
  }])
  .directive('drink', function () {
    return {
      restrict: 'A',
      scope: {
        flavor: "@"
      },
      template: '<div> {{flavor}} </div>'
    };

  });
