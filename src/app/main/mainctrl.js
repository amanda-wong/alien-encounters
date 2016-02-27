(function() {
  'use strict';

  angular
    .module('red')
    .controller('MainCtrl', MainCtrl);

  /** @ngInject */
  function MainCtrl($scope, $state) {
      $scope.toCheckinPage = function(){
        $state.go('check-in');
      };
  }

})();
