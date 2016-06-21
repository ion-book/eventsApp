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
    console.log('click en twitter');
  }
  
  $scope.doLogin = function(){
    console.log($scope.user);
    if($scope.user.email == "nico@algo.co" && $scope.user.password == "123"){
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

.controller('TabActivityCtrl', function($scope, $state) {
  
  $scope.notifications = [
    {
      picture: 'img/adam.jpg',
      name: 'Adam',
      text: 'Ha agreado un evento',
      date: new Date()
    },
    {
      picture: 'img/ionic.png',
      name: 'Hybrid Apps',
      text: 'Anuncio un nuevo evento',
      date: new Date()
    },
    {
      picture: 'img/mike.png',
      name: 'Mike',
      text: 'Comento sobre un evento',
      date: new Date()
    }
  ];
  
})

.controller('TabCalendarCtrl', function($scope, $state) {
  
  $scope.dates = [
    {
      dateGroup: new Date(2016, 7, 20),
      events: [
        {
          group: 'HybridApps',
          name: '¿Que es Crosswalk?',
          attendees: 201,
          check: false,
          date: new Date(2016, 7, 20, 12)
        },
        {
          group: 'DjangoBogota',
          name: 'Django REST',
          attendees: 101,
          check: true,
          date: new Date(2016, 7, 20, 13)
        }
      ]
    },
    {
      dateGroup: new Date(2016, 7, 21),
      events: [
        {
          group: 'MeteorBogota',
          name: 'Angular + Meteor',
          attendees: 331,
          check: false,
          date: new Date(2016, 7, 21, 2)
        },
      ]
    },
  ];
  
})

