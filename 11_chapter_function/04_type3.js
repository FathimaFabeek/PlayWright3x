//type3 no parameter and no argument value but has return value
function sayHello()
{
    console.log("Haiiiiii");
    return "Hello, World!";
}
let call=sayHello(); // Output: Haiiiiii
console.log(call); // Output: Hello, World!
function greetByHi()
{
    return 123;
}
let op=greetByHi(); // Output:  but not prints anything, op=123
console.log(op); // Output: 123