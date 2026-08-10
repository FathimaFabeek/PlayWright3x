function greet1(name1) {//normal function
    return `Hello, ${name1}!`;
}
let x=greet1("Alice");
console.log(x); // Output: Hello, Alice!
//function expression
let greet2 = function(name2) {
    return `Hello, ${name2}!`;
};
let y=greet2("Alice");
console.log(y); // Output: Hello, Alice!