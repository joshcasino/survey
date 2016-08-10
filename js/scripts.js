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
		$(".container").css("background-color", favoriteColor);

		event.preventDefault();

	});



});
