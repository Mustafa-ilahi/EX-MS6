var currentInfo = new Date();
var currentDay = currentInfo.getDay();
document.write("<h1>" + "Question 1" + "</h1>");
document.write("Today is: " + returnday() + ".");
document.write("<br />");
function returnday()
{
    if(currentDay==0)
    {
        return "Sunday";
    }
    else if(currentDay==1)
    {
        return "Monday";
    }
    else if(currentDay==2)
    {
        return "Tuesday";
    }
    else if(currentDay==3)
    {
        return "Wednesday";
    }
    else if(currentDay==4)
    {
        return "Thursday";
    }
    else if(currentDay==5)
    {
        return "Friday";
    }
    else if(currentDay==6)
    {
        return "Sunday";
    }
}
var currentHour = currentInfo.getHours();
var currentMin = currentInfo.getMinutes();
var currentSec = currentInfo.getSeconds();
document.write("Current time is: " + currentHour + " hours: " + currentMin + " minutes: " + currentSec + " seconds");
