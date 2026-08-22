let api_call=new Promise(function(resolve, reject)
{
    // i will make call
    reject("500 Error...");
});
api_call.then(function(data)
{
    console.log("Data success..");

}).catch(function(error)
{
    console.log(error);
});
//catch only works when promis rejected or fails, .then completely skipped