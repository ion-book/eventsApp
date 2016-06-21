angular.module('starter.controllers', [])

.controller('TutorialCtrl', function($scope, $state) {
  
  $scope.goToLoginPage = function(){
    $state.go('login');
  }
  
})

