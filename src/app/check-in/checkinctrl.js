(function() {
  'use strict';

  angular
    .module('red')
    .controller('CheckinCtrl', CheckinCtrl);

  /** @ngInject */
  function CheckinCtrl($scope) {
      this.online = true;
      $scope.description = 'Angular Seed Application';
  }

})();
