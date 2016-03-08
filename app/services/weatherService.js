angular.module('weatherService', [])

// Create Invoice Factory object
.factory('Weather', function($http){

	var weatherFactory = {};


// Create get factory to retrieve data from api
	weatherFactory.all = function(value){
		return	$http.get('http://api.openweathermap.org/data/2.5/forecast?q='+value+'&type=like&units=metric' + '&appid=22a7e3afef01d4ef350bfb07c8081860');
	}

	return	weatherFactory;

});
