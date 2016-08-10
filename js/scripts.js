// Business logic:

var addition = function(num1, num2) {
	return(num1 + num2);
}

var subtraction = function(num1, num2) {
	return(num1 - num2);
}

var multiplication = function(num1, num2) {
	return(num1 * num2);
}

var division = function(num1, num2) {
	return(num1 / num2);
}

var getNumber1 = function() {
	var num1 = parseInt($("#number1").val());
	return num1;
}

var getNumber2 = function() {
	var num2 = parseInt($("#number2").val());
	return num2;
}

// User interface logic:

$(document).ready(function() {
	$(".btn").click(function() {
		var btnText = $(this).text();
		var num1 = getNumber1();
		var num2 = getNumber2();

		if ( btnText === "ADD" ) {
			$("h3").text(addition(num1, num2));
		} else if  ( btnText === "SUBTRACT"){
			$("h3").text(subtraction(num1, num2));

		} else if  ( btnText === "MULTIPLY"){
			$("h3").text(multiplication(num1, num2));

		} else if  ( btnText === "DIVIDE"){
			$("h3").text(division(num1, num2));
		}
	});


});
