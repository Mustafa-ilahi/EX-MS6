var no = 123;
var string = "Mustafa";
var bool = true;
var a;
var obj = {name: "mustafa", age: "19"};
function typeCheck(toCheck)
{
    return alert(typeof toCheck);
}
typeCheck(no);
typeCheck(string);
typeCheck(bool);
typeCheck(a);
typeCheck(obj);
typeCheck(typeCheck);