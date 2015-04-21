$(document).ready(function(){

	$("#genButton").on("click", function() {
		var propId = randomNumber(1000, 5000);
		var sqFt = randomNumber(1000, 10000);
		var dolPerFt = randomNumber(20, 40);

		//$("#slide").hide().slideToggle("slow", function() {});


		var words = "<div><tr><td>Property ID: "+ propId +"  </td><td>"+ sqFt +" Sq. Ft</td><td>  $"+ dolPerFt +" /Ft  </td><td><button id='removeButton'>Remove</button></td></tr></div>";

		$("#flooring").append(words);
		words = $('#flooring').children().last();
		words.hide().slideDown();

	});

	$("#flooring").on("click", "#removeButton", function(){
		$(this).parent().slideUp("slow", function() {});
			$(this).remove();

	});
});

function randomNumber(min, max){
	return Math.floor(Math.random() * (1 + max - min) + min);
}