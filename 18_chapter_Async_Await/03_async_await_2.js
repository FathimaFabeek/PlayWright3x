async function getResults(){
    return "pass";
}
// getResults.then(function(results){
//     console.log(results);
// });
async function runTest(){
    let result= await Promise.resolve("login test passed");
    console.log(result);
    let result2=await Promise.resolve("dashboard test passed");
    console.log(result2);
}
runTest();