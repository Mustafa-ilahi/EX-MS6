var secretNum = 9;
var userSelection = prompt("Guess the secret number");
if(secretNum == userSelection)
{
    alert("Bingo! Correct answer");
}
else if(secretNum-1 == userSelection || secretNum+1 == userSelection)
{
    alert("Close enough to correct answer");
}
else{
    alert("Try again..!")
}
