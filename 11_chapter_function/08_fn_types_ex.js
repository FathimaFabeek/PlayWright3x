function doubleme(x) {
    return x * 2;
}
console.log(doubleme(5)); // Output: 10
const doublemeArrow = (x) => x * 2;
console.log(doublemeArrow(5)); // Output: 10
 const getEnv=()=> "staging";// WE CAN USE WITHOUT PARAMETER
 console.log(getEnv()); // Output: staging
 // multiline
 const getResult= (score)=>
 {
    if (score >= 90) return "pass";
    else return "fail";
 }
 console.log(getResult(85)); // Output: fail
 console.log(getResult(95)); // Output: pass