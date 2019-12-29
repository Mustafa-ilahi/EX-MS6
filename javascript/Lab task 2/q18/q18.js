var day= prompt("Enter day");
if(day=="Monday" || day=="monday" || day=="Tuesday" || day=="tuesday" || day=="Wednesday" || day=="wednesday" || day=="Thursday" || day=="thursday" || day=="Friday" || day=="friday")
{
    alert("It's a week day");
}
else if(day=="Saturday" || day=="saturday")
{
    alert("It's weekend");
}
else if(day=="Sunday" || day=="sunday")
{
    alert("Yay! It's a holiday");
}
else{
    alert("Please select days between Monday to Sunday");
}
