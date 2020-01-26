var num;
document.write("A.counting is : ");
for(var i=1;i<=15;i++)
{
    document.write(" "+i);
}
document.write("<br />")
document.write("B. Reverse counting is : ");
for(var j=10;j>=1;j--)
{
    document.write(" "+j);
}
document.write("<br />")
document.write("C. Even counting is : ");
for(var k=0;k<=10;k++)
{
    document.write(" "+(k+k));
}
document.write("<br />")
document.write("D. ODD counting is : ");
var nuum=1;
for(var l=1;l<=10;l++)
{
    ++nuum;
    document.write(" "+(nuum+l));
}
document.write("<br />")
document.write("E. Series is : ");
for(var k=1;k<=10;k++)
{
    document.write(" "+(k+k));
    document.write("k");
}