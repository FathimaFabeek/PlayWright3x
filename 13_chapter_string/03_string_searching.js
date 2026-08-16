// searching and checking
let url="https://staging.vwo.com/api/login?retry=true";
//includes
console.log(url.includes("staging"));
console.log(url.includes("production"));
console.log(url.startsWith("https"));
console.log(url.endsWith("true"));
console.log(url.indexOf("a"));//fst index
console.log(url.lastIndexOf("a"));
console.log(url.indexOf("no there"));