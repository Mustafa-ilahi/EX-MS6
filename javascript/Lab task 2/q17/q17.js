var num1 = prompt("Enter First number");
var num2 = prompt("Enter Second number");
var operation = prompt("Operation(+,-,*,/,%)");
if(operation=='+')
{
    var add = parseInt(num1) + parseInt(num2);
    alert(num1 + " + " + num2 + " is " + add);
}
else if(operation=='-')
{
    var sub = num1 - num2;
    alert(num1 + " - " + num2 + " is " + sub);
}
else if(operation=='*')
{
    var multipy = num1 * num2;
    alert(num1 + " * " + num2 + " is " + multipy);
}
else if(operation=='/')
{
    var divide = num1 / num2;
    alert(num1 + " / " + num2 + " is " + divide);   
}
else if(operation=='%')
{
    var modulo = num1 % num2;
    alert(num1 + " % " + num2 + " is " + modulo);   
}
else{
    alert("Invalid input..!");
}
