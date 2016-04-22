'use strict';
$(window).load(function() {

	$('#content').hide();
	let json = api.boa.run('boa-script.boa');
	$('#loading').hide();
	$('#content').show();
	console.log(json);

	for (let index in json.methodsDetails) {
		console.log(index);
		var method = String(index);
		$('#table-output-body').append("<tr><td><center> ${method} </center></td></tr>");
	}

	$('#clickButton').click(function insertInput(){
		var methodName = document.getElementById('searchbar').value;
		var timesCalled = json.methodsDetails[methodName];
		if (timesCalled != null)
		{
			console.log(timesCalled);
			document.getElementById("results").innerHTML = methodName + " was called " + timesCalled + " times";
		}
		else
		{
			document.getElementById("results").innerHTML = "The method " + methodName + " does not exist in this project. Please enter a new method.";
		}
} );


});

// $(window).load(function() {
//
//
// 	$('#table-output-body').append("<tr><td><center> Method </center></td></tr>");
// 	$('#table-output-body').append("<tr><td><center> Method </center></td></tr>");
// 	$('#table-output-body').append("<tr><td><center> Method </center></td></tr>");
// 	$('#table-output-body').append("<tr><td><center> Method </center></td></tr>");
// 	$('#table-output-body').append("<tr><td><center> Method </center></td></tr>");
//
// 	$('#clickButton').click(function insertInput(){
// 		var items = {"Method 1": 2, "Method 2": 8, "Method 3": 5, "Method 4": 10, "Method 5": 1, "Method 6": 9, "Method 7": 11, "Method 8": 28, "Method 9": 12, "Method 10": 9};
// 		var methodName = document.getElementById('searchbar').value;
// 		var timesCalled = items[methodName];
// 		if (timesCalled != null)
// 		{
// 			document.getElementById("results").innerHTML = methodName + " was called " + timesCalled + " times";
// 		}
// 		else
// 		{
// 			document.getElementById("results").innerHTML = "The method " + methodName + " does not exist in this project. Please enter a new method.";
// 		}
// 	} );
//
//
// });
