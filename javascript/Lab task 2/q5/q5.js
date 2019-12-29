var color = prompt("Enter color of traffic signal");
if(color=="red"|| color=="Red")
{
    alert("Vehicles must stop");
}
else if(color=="yellow" || color=="Yellow")
{
    alert("Vehicles should get ready to move");
}
else if(color=="green" || color=="Green")
{
    alert("Vehicles can move now");
}
else{
    alert("Please select anyone like red,green and yellow");
}
