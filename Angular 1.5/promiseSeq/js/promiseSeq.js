var myApp = angular.module('myApp', []);

myApp.controller('mainCtrl', function($scope, seqTest){    
    seqTest.test();
});


myApp.factory('seqTest', function($q){  
  function doPromise(item) {		
	  var deferred = $q.defer();	  
	  setTimeout(function() {		  		
			$("#count").append("<div>" + item + "</div>");
			deferred.resolve(item)		  
	  }, 1000);
	  
	  return deferred.promise;  
  }
  function doCount(arr) {
		return arr.reduce(function (promise, item) {
			return promise.then(function(result) {
				return doPromise(result +' '+ item);
      });				
		}, $q.when(''));	
  }
  return {
    test: function(){
      var items = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			doCount(items).then(function() {
				$("#count").append("<div>Done</div>");
	  });
    }
  }
});
