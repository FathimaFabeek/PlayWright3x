//immediately invoked function expression (IIFE)
function name1() {
    console.log("This function is invoked immediately");
}
name1();
//IIFW - it is fn without name and no need to be called explicitly, it will be invoked immediately after its creation
(function() {
    console.log("This function is invoked immediately");
})();
// arrow function IIFE. no need of name to function and no need to be called explicitly, it will be invoked immediately after its creation
(() => {
    console.log("This function is invoked immediately");
})();