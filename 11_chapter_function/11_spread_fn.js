function add(a,b,c)
{
    return a+b+c ;
}
let num1=[1,2,3,4];
console.log(add(...num1)); //spread operator// only allows three values to be passed in function as it has three parameters

function hasError(...codes)
{
    return codes.some(code => code >= 400);
}
let ResponseCodes=[200,201,404,500];// it will take more than three values as it has rest operator
console.log(hasError(...ResponseCodes));//true, as 404 and 500 are greater than 400