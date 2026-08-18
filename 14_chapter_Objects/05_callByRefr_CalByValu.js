//callBy Value
let a=10;
let b=a;
 b=99;
console.log(a);// this is callbyValue
a=90;
console.log(a);
console.log(b);
//callByrefrenc
let obj1={val:10};
let obj2=obj1;
obj2.val=99;
console.log(obj1.val);