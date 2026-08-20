let s="hello YOU";
let count=0;
for(i=0; i<s.length;i++)
if ("aeiouAEIOU".includes(s[i])) {
        count++;
    }
    console.log("Number of vowels:", count);
