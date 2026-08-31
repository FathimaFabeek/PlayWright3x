async function SayHello() {
    return "Hello, QA";
}
SayHello().then(function(msg)
{
    console.log(msg);
})
;
async function getStatus() {
    let status= await Promise.resolve(200);
    console.log("status ",status);
}
getStatus();