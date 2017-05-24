 // declare variables

 // pulling inputs on html page

 // function that takes variable 1 and variable 2 and adds them together
 // Create separate sentences for each operation that provides the results. Like "When I add your first number, X, to the second number, Y, I get Z."

 //You must use Functions and Jquery to make the sentence appear on a web page.
 //You must use form inputs, variables, functions, and jQuery.

 //Has to be dynamic so if you change the value of the variables, the webpage should show updated results automatically.

 $(document).ready(function () {

 	$(".vegetable").on("click", function (e) {
 		e.preventDefault();

 		var vegetable = $(this);


 		if (vegetable.hasClass("active")) {
 			vegetable.removeClass("active");
 		} else {
 			vegetable.addClass("active");
 		}

 		var totalSavings = 0;
 		var totalTime = 0;

 		$(".vegetable.active").each(function () {
 			totalSavings = totalSavings + parseFloat($(this).data("savings"));
 			totalTime = totalTime + parseFloat($(this).data("time"));
 		});

 		$("#result_money").val(totalSavings.toFixed(2)).css("font-weight", "bold");
 		$("#result_time").val(totalTime).css("font-weight", "bold");
 	});


 });
