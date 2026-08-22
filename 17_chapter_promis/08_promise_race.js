let fast_server=new Promise(function(resolve)
{
    setTimeout(function()
{
    resolve("fast 100 ms ")}), 100
});

let slower_server=new Promise(function(resolve)
{
    setTimeout(function()
{
    resolve("fast 500 ms")
}), 500
});
Promise.race([fast_server, slower_server]).then(
    function(winner){
        console.log("winner: ", winner);
    });