//some() example
const nums = [1, 3, 5];
console.log(nums.some(num => num % 2 === 0)); // false

//array.fill(value, start, end)
const arr = [1, 2, 3, 4, 5];
arr.fill(0, 2, 4); // fills elements from index 2 to 4 with 0
console.log(arr); // [1, 2, 0, 0, 5]    
//copyWithin()
//array.copyWithin(target, start, end)
const arr2 = [1, 2, 3, 4, 5];
arr2.copyWithin(0, 3, 5);
console.log(arr2); // [4, 5, 3, 4, 5]