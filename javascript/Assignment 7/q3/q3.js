var randomNum = Math.floor(Math.random() * 11);
console.log(randomNum);
var userInput = prompt("Enter a integer between 1-10");
document.write("<h1>" + "Question 3" + "</h1>");
if(userInput==randomNum)
{
    alert("Good Work")
}
else{
    alert("Not Matched");
}