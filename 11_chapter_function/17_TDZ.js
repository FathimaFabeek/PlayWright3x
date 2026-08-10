//IQ
var a="pramod";
 if(true)
 {console.log(a); // Output: pramod
    var a="temp";
    console.log(a); // Output: temp
 }
 let b=10;
 console.log(b); // Output: 10  
 if (true)
 {
    console.log(b); // refrence error because let and const are hoisted but not initialized. So, we cannot access them before initialization.
    let b=20;

 }