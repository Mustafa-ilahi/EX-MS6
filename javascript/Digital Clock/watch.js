var toCheck = setInterval(getTime,1000);
function getTime(){
var rightNow = new Date();
document.getElementById("Watch").innerHTML = rightNow.toLocaleTimeString();
}
