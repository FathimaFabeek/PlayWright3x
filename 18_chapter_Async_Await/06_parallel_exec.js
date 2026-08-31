function apicall(name){
    return new Promise(function(resolve)
{
    setTimeout (function()
{
    resolve(name, "200 ok");
},1000)
});
}
async function normalTest() {
    console.log("Starting of the test");
    let start=Date.now();
    let [r1,r2,r3]= await Promise.all([
        apiCall("Auth Service"),
        apicall("UserService"),
        apicall("payment Service")
    ])
    console.log(r1);
    console.log(r2);
    console.log(r3);
    console.log("Time: ~"+(Date.now()-start)+"ms");
    }
    normalTest();
