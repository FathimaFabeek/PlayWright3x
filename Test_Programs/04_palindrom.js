let x="MALAYALAM";
let revers="";
for(i=x.length-1; i>=0; i--)
{
    revers+=x[i];
}
console.log(revers);
if(revers==x)
{
console.log(revers + " is palindrome");
}
else
{
    console.log(x + " is not palindrome");
}
