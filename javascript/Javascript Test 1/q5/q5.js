var celsius = prompt("Enter Tempertaure in Celcius");
var celsiusToFarenheit = (celsius * 9/5) + 32;
document.write("<h1>" + "Question 5" + "</h1>");
document.write("<h3>" + "Celsius to Farenheit" + "</h3>");
document.write(celsius + "°C is " + celsiusToFarenheit + "°F");
var farenheit = prompt("Enter Temperature in Farenheit");
var farenheitToCelsius = (farenheit - 32) * 5/9;
document.write("<h3>" + "Farenheit to Celsius" + "</h3>");
document.write(farenheit + "°F is " + farenheitToCelsius + "°C");