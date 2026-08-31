// async function TestFlow() {
//     let step1=await Promise.resolve("Opened Browser");
//     console.log(step1);
//     let step2=await Promise.resolve("Clicked Login");
//     console.log(step2);
//     let step3=await Promise.resolve("Verified Dashboard");
//     console.log(step3);
// }
// TestFlow();
async function riskyTest() {
    try{
        let data= await Promise.reject("Element Not Found");
        console.log(data);
    }
    catch(error)
    {
        console.log("Error",error);
    }
}
riskyTest();