(function() {
  'use strict';

  angular
    .module('red')
    .controller('CheckinCtrl', CheckinCtrl);

  function CheckinCtrl($scope, $http, $cookies, $state, $rootScope) {
     var JOBS_GET_URL = 'https://red-wdp-api.herokuapp.com/api/mars/jobs';
     var COLONIST_POST_URL = 'https://red-wdp-api.herokuapp.com/api/mars/colonists';

     $scope.colonist = {};
     $scope.validate = false;

     $http({
         method: 'GET',
         url: JOBS_GET_URL
     }).then(function(response){
         $scope.jobs = response.data.jobs;
     }, function(error){
         // TODO: Handle error
     });

    $scope.login = function(event) {
        event.preventDefault();

        if($scope.checkinForm.$invalid) {
             $scope.validate = true;
             } else {

        $http({
            method:'POST',
            url: COLONIST_POST_URL,
            data: {
             'colonist' : $scope.colonist
            }
        }).then(function(response){
            $cookies.putObject('session_colonist', response.data.colonist);
             $state.go('encounters');
        });
    }
    };
  }

  })();
