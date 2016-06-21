angular.module('starter.controllers', [])

.controller('TutorialCtrl', function($scope, $state) {
  
  $scope.goToLoginPage = function(){
    $state.go('login');
  }
  
})

.controller('LoginCtrl', function($scope, $state, $ionicPopup) {
  
  $scope.user = {};
  
  $scope.goToFaceook = function(){
    console.log('click en facebook');
  }
  
  $scope.goToTwitter = function(){
    console.log('click en facebook');
  }
  
  $scope.doLogin = function(){
    console.log($scope.user);
    if($scope.user.email == "nico@ni.co" && $scope.user.password == "123"){
      $state.go('tab.activity');
    }else{
      $scope.user.password = '';
      $ionicPopup.alert({
        title: 'Hubo un error!',
        template: 'Por favor intente de nuevo',
        okType: 'button-assertive'
      });
    }
  }
  
})

