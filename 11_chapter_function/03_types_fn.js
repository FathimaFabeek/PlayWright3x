function addLog(a,b)
{

    console.log("Sum:", a + b);
}
let x=addLog(10, 20); // Output: Sum: 30
console.log(x); // Output: undefined (since the function does not return a value)   
function addReturn(a,b)
{
    return a + b;
}   
let y=addReturn(10, 20); // y will be 30
console.log(y); // Output: 30   