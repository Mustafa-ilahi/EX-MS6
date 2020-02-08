document.write("<h1>" + "Question 6" + "</h1>");
var userInput = prompt("Enter filename");
var extension = userInput.split(".").pop();
document.write("Filename is: " + userInput);
document.write("<br />");
document.write("Extension is: " + extension);