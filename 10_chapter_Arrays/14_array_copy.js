//copy
let original=[1,2,3,4,5];
let copy=original.slice();
console.log(copy);//[1,2,3,4,5]     
let copy1=[...original];
console.log(copy1);//[1,2,3,4,5]
let copy2=Array.from(original);
console.log(copy2);//[1,2,3,4,5]// all these are same and used to copy the array
let copy3=original.concat();
console.log(copy3);//[1,2,3,4,5]
// all these are shallow copy, if we change the original array then the copied array will not be affected   
copy1.push(6);
console.log(original);  
console.log(copy1);// only copy1 wil change, original will not change
//deepcopy
let deep_copy_array=original;
original.push(7);
console.log(original);  
console.log(deep_copy_array);// both will change because deep_copy_array is pointing to original array  
