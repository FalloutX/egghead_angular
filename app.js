angular.module('phoneApp', [])
  .controller('AppCtrl', [ '$scope', function($scope) {
    $scope.leaveVoiceMail = function(message, number) {
      console.log("insde");
      alert('Number: ' + number + ' Said: ' + message);
    };
  }])
  .directive('phone', function() {
    return {
      restrict: 'E',
      scope: {
        number: '@',
        network: '=',
        makeCall: '&'
      },
      templateUrl: 'phone.html',
      link: function(scope){
        scope.networks = ["Verizon", "Airtel", "Sprint", "AT&T"];
        scope.network = scope.networks[0];
      }
    };
  })
  ;
