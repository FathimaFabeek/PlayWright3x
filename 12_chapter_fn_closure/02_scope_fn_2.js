let gx=10;
function outer() {
    let x=20;
    function inner() {
        let y=30;
        console.log(gx); // can access global variable
        console.log(x); // can access outer function variable
    }
    inner();
    console.log(y); // cannot access inner function variable, it will give refrence error.
}
outer();
