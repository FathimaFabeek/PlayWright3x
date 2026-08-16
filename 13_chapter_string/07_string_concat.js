console.log("Hello"+ " " + "world");
console.log("Hello" .concat( " " , "world"));
console.log (`${"Hello"} ${"world"}`);
let url="https://app.vwo.com?app=pramod";
console.log(url.replace(/app/g,"qa"));//all app will replaceds by qa
//splitting and joining
console.log("pass,fail,skip".split(","));
console.log("hello".split(""));
//template literal joining with format
let parts=["2024", "03" ,"07"];
let date =parts.join("-");
console.log(date);