var a="pramod";
 if(true)
 {
    console.log(a); // Output: pramod
    var a="temp";
 }
 //let
 let b="pramod";
 if(true)
 {
    console.log(b); // refrence error because let and const are hoisted but not initialized. So, we cannot access them before initialization.
    let b="temp";
 }
 // b will move to TDZ(temporal dead zone) and will not be accessible before initialization. So, it will give reference error.