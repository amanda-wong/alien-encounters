    (function() {
      'use strict';

      angular
        .module('red')
        .controller('ReportCtrl', ReportCtrl);

      /** @ngInject */
      function ReportCtrl($scope, $http) {
        var ALIENS_GET_URL = 'https://red-wdp-api.herokuapp.com/api/mars/aliens';
        var REPORT_POST_URL = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';

        $scope.encounter = {};

        $http({
            method: 'GET',
            url: ALIENS_GET_URL
        }).then(function(response){
            $scope.aliens = response.data.aliens;
        }, function(error){
            // TODO: Handle error
        });

        $scope.report = function(event) {
           event.preventDefault();

           $http({
               method:'POST',
               url: REPORT_POST_URL,
               data: {
                   'encounter' : $scope.encounter,
                   'date' : $scope.encounter.date,
                   'type' : $scope.aliens.type,
                   'action' : ''
               }
           }).then(function(response){
               console.log(response);
           }, function(error){
               console.log(error);
           });
       };
     }

     })();
