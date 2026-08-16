let env="staging";
function setupConfig() {
    let timeout=3000; //local scope variable
    console.log(env); // can access global variable inside function
    console.log( timeout); // can access local variable inside function
}
setupConfig();
console.log(env); // can access global variable
console.log(timeout); // cannot access local variable outside function, it will give refrence error.
