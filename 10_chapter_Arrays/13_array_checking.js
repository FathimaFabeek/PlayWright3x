//array checking
let arr=[1,2,3,4,5];
console.log(Array.isArray(arr));
let result=Array.isArray([1,2,3]);
let result1=Array.isArray("abc");
console.log(result);//true
console.log(result1);//false
//every, some
console.log([80,90,100].every(score=>score>=80));//true
console.log([70,90,100].every(score=>score>=90));//true   
console.log([70,60,50].some(score=>score>=90));//false  //atleast one should be true
console.log([70,90,100].some(score=>score>=90));//true
