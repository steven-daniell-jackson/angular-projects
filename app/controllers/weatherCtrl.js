var app = angular.module('weatherCtrlModule',['weatherService']);

app.controller('WeatherController',  function($scope, Weather){

$scope.name = '';

	$scope.$watch('location', function() {
		$scope.location;     


// If location contains data. Request data from Weather service API
if ($scope.location) {

	Weather.all($scope.location)
	.success(function(data){

// Bind city name to $scope.name
$scope.name = data.city.name;

// Run function and retrieve formatted Data  
var formattedDate = convertDate(data.list);


// Allocate objects to $scope for ng-repeat
$scope.forecasts = formattedDate;
// console.log($scope.forecasts)

}); //End Service

}




	}, true); //End watcher





}); //End controller



// Convert Unix date into usable date
var convertDate = function(data){


	for (x in data) {

// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
var date = new Date(data[x].dt*1000);
// Hours part from the timestamp
var hours = date.getHours();
// Minutes part from the timestamp
var minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
var seconds = "0" + date.getSeconds();

data[x].dt = date;



}

// Return the convertDate
return data;

}