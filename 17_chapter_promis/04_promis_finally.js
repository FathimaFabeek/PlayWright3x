let api_call=new Promise(function(resolve, reject)
{
    resolve({status: 200});
    //reject("error");//it is not advisable to use both resolve and reject
});
api_call.then(function(data)
{
    console.log(data);
}).catch(function(error)
{
    console.log(error);
}).finally(function()
{
    //always executed
    console.log("it has executed anyways how..");
})