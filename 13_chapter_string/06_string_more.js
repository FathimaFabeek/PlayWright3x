let str=" Hello, World!";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
// trim white space
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());
//replace
let msg="Test: Fail. Retry:Fail";
console.log(msg.replace("Fail" , "Pass"));
console.log(msg.replaceAll("Fail" , "Pass"));
console.log(msg.replace(/Fail/g , "Pass")); //replace all fail with pass, with regex

