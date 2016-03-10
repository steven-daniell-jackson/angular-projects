var app = angular.module('RPSCtrlMod',[]);

app.controller('RPS', ['$scope', '$location',  function($scope, $location) {

	$scope.userInput = '';
	$scope.computerInput = '';
	$scope.results = '';

// Reset game and values with a little css animations
$scope.reset = function(){

	
	$scope.userInput = ''
	$scope.results = '';

	$('button').click(function(){

		$(".box-flip > .front").css('transform', 'perspective( 600px ) rotateY( 0deg )');
		$(".box-flip > .back").css('transform', 'perspective( 600px ) rotateY( 180deg )');
	});


	$('#paperImg').show();
	$('#scissorsImg').show();
	$('#rockImg').show();


	

}

$('#userSelection img').click(function(){

	$(".box-flip > .front").css('transform', 'perspective( 600px ) rotateY( -180deg )');
	$(".box-flip > .back").css('transform', 'perspective( 600px ) rotateY( 0deg )');
});



// Compare User Selection against the Computer and determine a winner
$scope.validate = function(userSelection){


$scope.computerInput = random();

	switch(userSelection) {

		case 'Rock':
		$('#paperImg').fadeOut();
		$('#scissorsImg').fadeOut();

		if ($scope.computerInput == "Paper") {
			$scope.results = "lose";

		} else if ($scope.computerInput == "Scissors"){
			$scope.results = "win";

		} else {
			$scope.results = "draw";
		}
		break;

		case 'Paper':
		$('#rockImg').fadeOut();
		$('#scissorsImg').fadeOut();


		if ($scope.computerInput == "Scissors") {				
			$scope.results = "lose";
		} else if ($scope.computerInput == "Rock"){
			$scope.results = "win";

		} else {
			$scope.results = "draw";
		}
		break;

		default:

		$('#rockImg').fadeOut();
		$('#paperImg').fadeOut();

		if ($scope.computerInput == "Rock") {
			$scope.results = "lose";
		} else if ($scope.computerInput == "Paper"){
			$scope.results = "win";

		} else {
			$scope.results = "draw";
		}
	}

}

}]);






// Get computer selection randomly
var random = function(){

	var computerSelection = Math.floor((Math.random() * 3) + 1);

	switch(computerSelection) {
		case 1:
		return 'Rock';
		break;
		case 2:
		return 'Paper';
		break;
		default:
		return 'Scissors';
	}


}