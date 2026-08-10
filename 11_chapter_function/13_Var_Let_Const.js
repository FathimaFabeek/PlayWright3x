var a=10;
console.log(a);//10
function test(){
    console.log("hello");
    var a=20;
    console.log(a);20
    if(true){
        var a=30;
        console.log(a);//30
    }
    console.log(a);// 30 because var is function scoped, so the last assignment of a=30 will affect the variable a in the function scope.
}
test();
// let-block scoped
let b=20;          //global scope
console.log(b); // 20
function print(){
    console.log("hello");
    let b=30;          //function scope
    console.log(b);// 30
    if(true){
        let b=40;           //block scope
        console.log(b);// 40
    }
    console.log(b);// 30
}
print();
console.log(b);// 20
////const
const pi=3.14;
console.log(pi); // 3.14
//pi=3.14159; // TypeError: Assignment to constant variable.    