// Business logic:

// User interface logic:
$(document).ready(function(){
	$("#surveyForm").submit(function(event) {
		var name = $("#name").val();
		var food = $("input:radio[name=food]:checked").val();
		var music = $("#music").val();
		$("#nameDisplay").text(name);
		$("#foodDisplay").text(food);
		$("#musicDisplay").text(music);

		var favoriteColor = $("#color").val();
		$("#colorDisplay").css("background-color", favoriteColor);
		$("#colorDisplay").text(favoriteColor);
		// $(".container").css("background-color", favoriteColor);

		$("#greeting").show();

		event.preventDefault();
	});

	$("#resetBtn").click(function() {
		$("#greeting").hide();
		// $(".container").css("background-color", "white");
	});

	$("#ageSubmit").click(function() {
		var dob = $("#born").val();
		dob = parseInt(dob);

		if (dob < 1995){
			$("#ageContainer").hide();
			$("#mainPage").show();
		} else {
			alert("Get older!");
		}
	});

});
