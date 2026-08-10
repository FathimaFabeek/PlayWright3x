const greet1=function(name1) {//normal function
    return `Hello, ${name1}!`;
}   
console.log(greet1("Alice")); // Output: Hello, Alice!
//Arrow function
const greet2 = (name2) =>  `Hello, ${name2}!`;
console.log(greet2("Bob")); // Output: Hello, Bob!
// fn as expression 
let greet3 = function(name3) {
    return `Hello, ${name3}!`;
};
let y=greet3("Charlie");
console.log(y);