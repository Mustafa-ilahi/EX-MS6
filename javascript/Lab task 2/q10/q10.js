var item1Name = prompt("Name of item1");
var item2Name = prompt("Name of item2");
var item1price = prompt("Price of item1");
var item2price = prompt("Price of item2");
var item1qty = prompt("Ordered quantity of item1");
var item2qty = prompt("Ordered quantity of item2");
var shippingCharges = prompt("Enter Shipping Charges");
var shippingCharges2 = parseInt(shippingCharges)
totalCost = (item1price * item1qty) + (item2price * item2qty) + shippingCharges2;
document.write("<h1>" + "Shopping Cart" + "</h1>");
document.write("<br />");
document.write("<br />");
document.write("<br />");
document.write("Price of" + " " + item1Name + " is " + item1price);
document.write("<br />");
document.write("Price of" + " " + item2Name + " is " + item2price);
document.write("<br />");
document.write("<br />");
document.write("Shipping Charges " + shippingCharges2);
document.write("<br />");
document.write("<br />");

if(totalCost>2000)
{
    var dicountedPrice = totalCost / 10;
    document.write("Total cost of your order is " + totalCost + " PKR");
    document.write("<br />");
    var bill =  totalCost - dicountedPrice;
    document.write("Discounted Price is " + bill);
}
else{
    document.write("Total cost of your order is " + totalCost + " PKR");
}