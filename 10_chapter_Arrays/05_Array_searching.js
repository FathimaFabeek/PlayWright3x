let results=["pass" , "fail", "pass", "error", "fail"];
console.log(results.indexOf("fail"));//return frst index
console.log(results.indexOf("skip"));//return negative
console.log(results.lastIndexOf("fail"));
console.log(results.includes("error"));
let nums=[10,25,30,45];
let reslt=nums.find(x=> x>20);
console.log(reslt);
let index=nums.findIndex(n=> n>20);
console.log(index);
console.log(nums.findLast(n=>n>20));
let ind=nums.findLastIndex(n=> n>20);
console.log(ind);