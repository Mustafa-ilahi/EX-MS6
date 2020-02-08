document.write("<h1>" + "Question 9" + "</h1>");
var userInput = prompt("Enter Number");
if(userInput>0 && userInput%3==0 || userInput%7==0)
{
    document.write("Its positive number and number is divided by 3 or 7.");
}
else{
    document.write("Not divided by 3 or 7.");
}