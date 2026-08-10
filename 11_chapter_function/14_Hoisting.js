var x;//variable is declared but not assigned value, so it will return undefined
console.log(x);//hoisting concept in js, variable is declared but not assigned value, so it will return undefined
var x="pramod";//using a variable before declaring it is possible in js, but it will return undefined, this is called hoisting
console.log(x);


console.log(greeting);//variable is declared and assigned value, so it will return pramod
var greeting="pramod";//using a variable before declaring it is possible in js, but it will return undefined, this is called hoisting   
//console.log(greeting);
function getUser_Status() {
    console.log(status_code);//variable is declared but not assigned value, so it will return undefined
    var status_code="active";//using a variable before declaring it is possible in js, but it will return undefined, this is called hoisting    
    console.log(status_code);//variable is declared and assigned value, so it will return active
}
getUser_Status();