    (function() {
      'use strict';

      angular
        .module('red')
        .controller('ReportCtrl', ReportCtrl);

      /** @ngInject */
      function ReportCtrl($scope, $http, $cookies, $state, $rootScope, $filter) {
        var ALIENS_GET_URL = 'https://red-wdp-api.herokuapp.com/api/mars/aliens';
        var REPORT_POST_URL = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';

        $scope.encounter = {
            colonist_id: $cookies.getObject('session_colonist').id,
            date: $filter('date')(Date.now(), 'yyyy-MM-dd')
        };
        // $scope.validate = false;

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

        // if($scope.reportForm.$invalid) {
        //     $scope.validate = true;
        //     } else {

           $http({
               method:'POST',
               url: REPORT_POST_URL,
               data: {
                   'encounter' : $scope.encounter
               }
           }).then(function(response){
               $state.go('encounters');
               console.log(response);
           }, function(error){
               console.log(error);
           });
    //    }
       };
     }

     })();
