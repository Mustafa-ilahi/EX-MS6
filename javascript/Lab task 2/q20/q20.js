var num1 = prompt("Enter First Number");
var num2 = prompt("Enter Second Number");
if(num1>num2)
{
    alert("The greatest number of " + num1 + " and " + num2 + " is " + num1);
}
else if(num1<num2)
{
    alert("The greatest number of " + num1 + " and " + num2 + " is " + num2);
}
else if(num1==num2)
{
    alert(num1 + " and " + num2 + " are equal");
}