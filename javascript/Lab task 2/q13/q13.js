var team1Name = prompt("Enter team name for team 1");
var team1Scores = prompt("Enter total scores for team 1");
var team2Name = prompt("Enter team name for team 2");
var team2Scores = prompt("Enter total scores for team 2");
if(team1Scores>team2Scores)
{
    alert(team1Name + " have won the game");
}
else if(team1Scores<team2Scores)
{
    alert(team1Name + " have won the game");
}
else if(team1Scores==team2Scores)
{
    alert("There is a tie between " + team1Name + " and " + team2Name);
}
