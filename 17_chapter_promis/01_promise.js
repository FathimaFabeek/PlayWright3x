let order=new Promise(function(resolve, reject)// these two are callbacks
{
let foodReady=true;
if(foodReady){
    resolve("pizza is delivered");
}
else{
    reject("order cancelled");
}
})
console.log(order);