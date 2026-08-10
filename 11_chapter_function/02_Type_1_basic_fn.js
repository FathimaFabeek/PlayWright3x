// no return type and No arguments
function greet() {
    console.log("Hello, World!");
}
greet(); // Output: Hello, World!

// no return type and with arguments
function greetPerson(name) {
    console.log("Hello, " + name + "!");
}
greetPerson("Alice"); // Output: Hello, Alice!
function addNumbers(a, b) {
    console.log("Sum:", a + b);
}
addNumbers(5, 3); // Output: Sum: 8 
let x=addNumbers(10, 20); // Output: Sum: 30
console.log(x); // Output: undefined (since the function does not return a value)S
//with return type and no arguments
function getGreeting() {
    return "Hello, World!";
}
console.log(getGreeting()); // Output: Hello, World!
let x1=getGreeting();
console.log(x1); // Output: Hello, World!
//with return type and with arguments
function multiplyNumbers(a, b) {
    return a * b;
}
let x2=multiplyNumbers(5, 3);// prints nothing, but x2=15
console.log(x2); // Output: 15
console.log(getGreeting()); 