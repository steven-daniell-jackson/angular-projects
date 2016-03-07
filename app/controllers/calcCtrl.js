var app = angular.module('calcCtrlMod',[]);

app.controller('CalcControl', ['$scope', function($scope) {


	$scope.calcFields = [
	['1','2','3','+'],
	['4','5','6','-'],
	['7','8','9', '*'],
	['0', '/','clear', '=']
	];


// Model
$scope.displayValue = "";
$scope.displayInput = "";


// Variables
$scope.OperatorFlag = false;
$scope.newValueInput = 0;
$scope.operator = "";


$scope.runningTotal = 0;


// Update display
$scope.updateDisplay = function(entry){

	$scope.displayInput += "" + entry;
	$scope.newValueInput = parseInt($scope.displayInput);

	console.log("Input Value: " + $scope.displayInput);
}

$scope.add = function(){

	$scope.operator = "+";
	$scope.OperatorFlag = true;

	if ($scope.OperatorFlag) {

		if ($scope.runningTotal == 0){
			$scope.runningTotal = $scope.newValueInput;
			$scope.displayValue = $scope.runningTotal;
			console.log("Add: " + $scope.newValueInput)
		} else {
			$scope.runningTotal += $scope.newValueInput;
			$scope.displayValue = $scope.runningTotal;
			console.log("Add: " + $scope.newValueInput)
		}

		$scope.newValueInput = 0;
		$scope.displayInput = "";
	}
	$scope.OperatorFlag = false;

}


$scope.subtract = function(){

	$scope.operator = "-";
	$scope.OperatorFlag = true;

	if ($scope.OperatorFlag) {
		if ($scope.runningTotal == 0){
			$scope.runningTotal = $scope.newValueInput;
			$scope.displayValue = $scope.runningTotal;
			console.log("Subtract: " + $scope.newValueInput)
		} else {
			$scope.runningTotal -= $scope.newValueInput;
			$scope.displayValue = $scope.runningTotal;
			console.log("Subtract: " + $scope.newValueInput)
		}

		$scope.displayInput = "";
		$scope.newValueInput = 0;
	}
	$scope.OperatorFlag = false;
}

$scope.multiply = function(){

	$scope.operator = "*";
	$scope.OperatorFlag = true;

	if ($scope.OperatorFlag) {

		if ($scope.runningTotal == 0){
			$scope.runningTotal = $scope.newValueInput;
			$scope.displayValue = $scope.runningTotal;
			console.log("Multiply: " + $scope.newValueInput)
		} else {
			$scope.runningTotal = $scope.runningTotal * $scope.newValueInput;
			$scope.displayValue = $scope.runningTotal;
			console.log("Multiply:  " + $scope.newValueInput)
		}

		$scope.displayInput = "";
		$scope.newValueInput = 0;
	}
	$scope.OperatorFlag = false;
}


$scope.divide = function(){

	$scope.operator = "/";
	$scope.OperatorFlag = true;

	if ($scope.OperatorFlag) {
		
		if ($scope.runningTotal == 0){
			$scope.runningTotal = $scope.newValueInput;
			$scope.displayValue = $scope.runningTotal;
			console.log("Divide: " + $scope.newValueInput)
		} else {
			if ($scope.newValueInput === 0) {
				$scope.err = "Cannot divide by zero"
			} else {
				$scope.runningTotal = $scope.runningTotal / $scope.newValueInput;
				$scope.displayValue = $scope.runningTotal;
				console.log("Divide: " + $scope.newValueInput)

			}

		}

		$scope.displayInput = "";
		$scope.newValueInput = 0;
	}
	$scope.OperatorFlag = false;
}

$scope.clear = function(){

// Model
$scope.displayValue = 0;
$scope.displayInput = "";

// Variables
// $scope.newValueFlag = true;
$scope.newValueInput = 0;
$scope.operator = "";

$scope.runningTotal = 0;

}



$scope.equals = function(){

	switch($scope.operator) {
		case '+':
		$scope.OperatorFlag = true;
		$scope.add();
		$scope.operator = "";
		break;
		case '-':
		$scope.OperatorFlag = true;
		$scope.subtract();
		$scope.operator = "";
		break;
		case '*':
		$scope.OperatorFlag = true;
		$scope.multiply();
		$scope.operator = "";
		break;
		case '/':
		$scope.OperatorFlag = true;
		$scope.divide();
		$scope.operator = "";
		break;

	}


}



}]);
