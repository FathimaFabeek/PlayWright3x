function OpenBrowser(callback){
    console.log("Open Browser");
    setTimeout(function(){
        console.log("step1- Browser Starting...");
        callback();
    },500);
}
function GoToLoginpage(callback)
{
    setTimeout(function()
    {
        console.log("step2: Login page loaded...");
        callback();
    },500);
}
function EnterCredentials(callback)
{
    setTimeout(function()
    {
        console.log("step3: credentals entered...");
        callback();
    },500);
}
function clickLogin(callback)
{
    setTimeout(function()
    {
        console.log("step4: Login button clicked...");
        callback();
    },500);
}
// to calling this
OpenBrowser(function(){
    GoToLoginpage(function(){
        EnterCredentials(function(){
            clickLogin(function(){
                console.log("Test Done");
            })
        })
    })
})
// it is the difficulty to call this. so it is not a good way tto do. so callback not 
//using regularly.
