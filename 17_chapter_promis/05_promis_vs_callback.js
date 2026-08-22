function openBrowser()
{
    return new Promise(function(resolve)
{
    resolve("browser has been opened");//not using any time interval to wait
})
}
function gotoLogin()
{
    return new Promise(function(resolve)
{
    resolve("login page Loaded..");
}) ;
}
function EnterCredentials()
{
    return new Promise(function(resolve)
{
    resolve("Credentials entered..");
}) }
function clickLogin()
{
    return new Promise(function(resolve)
{
    resolve("Logged in succesfully..");
}) }
// calling fns
openBrowser().then(function(msg)
{
    console.log("step1: ", msg);
    return gotoLogin();
}).then(function(msg)
{
    console.log("step2: ", msg);
    return EnterCredentials();
}).then(function(msg)
{
    console.log("step3: ", msg);
    return clickLogin();
}).then(function(msg)
{
    console.log("step4: ", msg);
    return gotoLogin();
}).catch(function(error)
{
    console.log(" Error ",error);
}).finally(function()
{
console.log("done execution");
});
