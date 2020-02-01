const numbers = [1, 3, 4, 6, 8, 9];
function checkEven(num)
{
    return num%2==0;
}
var evenNum = numbers.filter(checkEven);
alert('Even numbers: ' + evenNum); 