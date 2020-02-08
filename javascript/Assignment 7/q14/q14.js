document.write("<h1>" + "Question 14" + "</h1>");
var userInput = prompt("Enter a string to convert it into an array");
function convertString(str)
{
    return str.split("");
}
document.write("Before convert: " + userInput);
document.write("<br />");
document.write("After convert: " + convertString(userInput));