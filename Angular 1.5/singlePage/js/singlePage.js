var demoApp = angular.module('demoApp', ['ngRoute']);

demoApp.config(function($routeProvider, $locationProvider){
  $routeProvider
     .when('/', {
         templateUrl: 'partials/home.html',
         controller: 'mainCtrl'
     })
     .when('/one', {
         templateUrl: 'partials/part.html',
         controller: 'oneCtrl'
     })
     .otherwise({
        redirectTo: '/'
      });
   $locationProvider.html5Mode(true);
});

demoApp.controller('mainCtrl', function($scope){
  $scope.pageView = 'mainCtrl';
  $scope._title = 'HOME'
  $scope._text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'+
                 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor'+
                'in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
});

demoApp.controller('oneCtrl', function($scope){
  $scope.pageView = 'oneCtrl';
  $scope._title = 'ONE'
  $scope._text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'+
                 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor'+
                'in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
});
