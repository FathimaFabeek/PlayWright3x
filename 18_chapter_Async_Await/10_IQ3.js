// async function apiTest() {
//     try{
//         let response= await Promise.resolve({status: 201, body:"created"});
//         console.log("Status ", response.status);
//         console.log("body ", response.body);
//     }
//     catch(err){
//         console.log("Error ",err);
//     }
//     finally
//     {
//       console.log("Test Completed");
//     }
// }
// apiTest();

console.log("A")
 async function test() {
    console.log("B");
    await Promise.resolve();
    console.log("C"); // there is await , so it will execute after wait
 }
 test();
 console.log("D");