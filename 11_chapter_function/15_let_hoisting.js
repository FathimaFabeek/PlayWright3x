
console.log(username); // ReferenceError: Cannot access 'username' before initialization
let username = "pramod";
console.log(username); // Output: pramod
// it will show reference error because let and const are hoisted but not initialized. So, we cannot access them before initialization.
let f;
console.log(f); // Output: undefined
 let count=count+1;
 console.log(count);