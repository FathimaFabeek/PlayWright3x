function infiniteLoop():never{
    while(true){

    }
}
//never means function never returns (throw or infinite loop)
function throwError(message:string):never{
    throw new Error(message);
}
// mostly used whenever we know there is exception
console.log(infiniteLoop());
console.log(throwError("error"));