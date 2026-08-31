//with promises, u use catch
//with async AND  await you use try,catch- exactly like regular js
async function testAPI() {
    try{
        let result= await Promise.reject("503 Service unavailable");
        console.log('Result', result);
    }
    catch(error){
        console.log('Error', error);
}
finally{
    console.log("clean up!!");
}
}
testAPI();