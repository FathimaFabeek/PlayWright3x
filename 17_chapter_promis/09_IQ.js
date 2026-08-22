// let p=new Promise(function(resolve, reject)
// {
//     resolve(42);
// });
// p.then(function(value)
// {
//     console.log("Answer: "+ value);
// });
// let p1=new Promise(function(resolve, reject)
// {
//     reject("something broken");
// });
// p1.catch(function(err)
// {
//     console.log("caught: "+ err);
// });

// let p2=Promise.resolve(5);
// p2.then(function(val)
// {
//     return val * 10;
// }).then(function(val)
//     {
// console.log("Result :", val);
//     });

// Promise.resolve(1)
// .then(function(val)
// {
// console.log(val)
// return val + 1;
// })
// .then(function(val)
// {
//     console.log(val);
//     return val +1;
// }).then(function(val){
//     console.log(val);
// });
// Promise.resolve("start")
// .then(function(val)
// {
//     console.log(val);
//     throw new Error("Broke at step2");// if here failed it will go to catch
    
// }).then(function()
// {
//     console.log("This will not run");// it will skip
// }).catch(function(err)
// {
//     console.log("caught: ", err.message);
// });
Promise.reject("Test Failed")
.then(function(data)
{
    console.log("Data :", data);
}).catch(function(err)
{
    console.log("Error :", err);
}).finally(function()
{
    console.log("Cleanup done");
})
;// when error comes, it goes tto catch ,then finally