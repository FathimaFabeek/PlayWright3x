// type 4 with arguments and return type
function calculateArea(length, width) {
    return length * width;
}
let op=calculateArea(5, 10); // Output: 50
console.log(op); // Output: 50
//using template literals
function calculatePerimeter(length, width) {
    return `The perimeter of the rectangle is: ${2 * (length + width)}`;
}
let perimeter = calculatePerimeter(5, 10);
console.log(perimeter); // Output: The perimeter of the rectangle is: 30    
function greeet(name, age) {
    return `Hello, ${name}! You are ${age} years old.`;
}
let greeting = greeet("Alice", 25);
console.log(greeting); // Output: Hello, Alice! You are 25 years old.   