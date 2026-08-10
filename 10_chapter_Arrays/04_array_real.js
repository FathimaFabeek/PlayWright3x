let browser=['chrome','firefox', 'safari', 'opera', 'edge'];
console.log(browser.length);
browser.pop();//remove edge
console.log(browser);
let removed=browser.shift();//remove fst
console.log(browser);
//console.log(removed);
for (let i=0;i<browser.length;i++)
{
    console.log(browser[i]);

if(browser[i]==="opera")
{
    console.log("automation not allowed in opera");
}}