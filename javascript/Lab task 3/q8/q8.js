var str = "The quick brown fox jumps over the lazy dog";
var x,j=0;
for(x=0;x<str.length;x++)
{
    if((str.charAt(x) == "t" || str.charAt(x) == "T") && str.charAt(x+1) == "h" && str.charAt(x+2) == "e")
    {
        j=j+1;
    }
}
document.write(j);