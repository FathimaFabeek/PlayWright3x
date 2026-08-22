let api_call=new Promise(function(resolve, reject)
{
    resolve({status:200, body:"user-data"});
});
api_call.then(function(response)//then runs only if promis run succesfully
{
    console.log(response);
    console.log(response.status);
    console.log(response.body);
});