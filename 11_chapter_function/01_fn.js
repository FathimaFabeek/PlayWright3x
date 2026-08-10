function getResult(score)
{
    return score>=70 ? "pass":"fail";
}
console.log(getResult(80)); // pass
console.log(getResult(60)); // fail

function sayHello(name)
{
console.log(name);
}
sayHello("Alice"); // Alice
sayHello(85); // Bob 