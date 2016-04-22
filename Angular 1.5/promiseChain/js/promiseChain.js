var myApp = angular.module('myApp', []);

myApp.controller('mainCtrl', function($scope, chainTest){    
    chainTest.test();
});


myApp.factory('chainTest', function($q){
  _one = function(){
     var deferred = $q.defer();
     console.log('_one');
     deferred.resolve('_one');
     return deferred.promise;
  },
  _two = function(val){
     var deferred = $q.defer();
     console.log('_two');
     console.log('param val :' + val);
     deferred.resolve('_two');
     return deferred.promise;
  },
  _three = function(val){
     var deferred = $q.defer();
     console.log('_three')
     console.log('param val :' + val);
     deferred.resolve('_three');
     return deferred.promise;
  }
  return {
    test: function(){
      return _one()
             .then(function(response){
               return _two(response);
             })
             .then(function(response){
               _three(response);
             });
    }
  }
});
