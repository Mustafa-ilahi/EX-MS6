let userInput = prompt("Enter your date of birth (dd/mm/year)");
let date = new Date();
let currentYear =  date.getFullYear();
let userYear = parseInt(userInput.slice(6))
let userAge = currentYear - userYear;
console.log(userAge)
document.write("<h1>" + "Question 2" + "</h1>")
document.write("<h2>" + "Your DOB is: " + userInput + "</h2>")
document.write("<h2>" + "Your age is: " + userAge + "</h2>")