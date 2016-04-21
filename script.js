'use strict';

// $('#content').hide();
// let json = api.boa.run('boa-script.boa');
// $('#loading').hide();
// $('#content').show();
// console.log(json);

// for(let index in json.methodsDetails) {
// 		$('#table-output-body').append('<tr><td><center> ${index} </center></td>')
// }

$('#table-output-body').append('<tr><td><center> xxx </center></td>')
$('#table-output-body').append('<tr><td><center> xxx </center></td>')
$('#table-output-body').append('<tr><td><center> xxx </center></td>')
$('#table-output-body').append('<tr><td><center> xxx </center></td>')
$('#table-output-body').append('<tr><td><center> xxx </center></td>')
$('#table-output-body').append('<tr><td><center> xxx </center></td>')
$('#table-output-body').append('<tr><td><center> xxx </center></td>')
$('#table-output-body').append('<tr><td><center> xxx </center></td>')

function insertInput()
{
  var items = {"hello": 2, "bye": 8};
  var methodName = document.getElementById('searchbar').value;
  // timesCalled = json.methodsDetails[methodName];
  var timesCalled = items[methodName];
  if (timesCalled != null)
  {
    document.getElementById("results").innerHTML = methodName + " was called " + timesCalled + " times";
  }
  else
  {
    document.getElementById("results").innerHTML = "The method " + methodName + " does not exist in this project. Please enter a new method.";
  }
}
