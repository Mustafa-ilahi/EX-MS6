document.write("<h1>" + "Question 13" + "</h1>");
var userInput = prompt("Enter a string");
function changeCase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];  
  for(var i = 0; i < array1.length; i++){
      newarray1.push(array1[i].charAt(0).toUpperCase()+array1[i].slice(1));
  }
  return newarray1.join(' ');
}
document.write("<h3>" + "Before: " + userInput+ "</h3>")
document.write("<h3>" + "After: " + changeCase(userInput) + "</h3>");