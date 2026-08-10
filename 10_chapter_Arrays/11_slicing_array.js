//slicing array
let arr1=[1,2,3,4,5];
console.log(arr1.slice(1,3));//[2,3] index 1 is included and index 3 is excluded
console.log(arr1.slice(2,4));//[3,4] index 2 is included and index 4 is excluded
console.log(arr1.slice(0,5));//[1,2,3,4,5] index 0 is included and index 5 is excluded
console.log(arr1.slice(-2,-1));//[4] index -2 is included and index -1 is excluded