function getStatus(code)
{
    if (code >= 200 && code < 300) {
        return "Success";
    } else if (code >= 400 && code < 500) {
        return "Client Error";
    } else if (code >= 500) {
        return "Server Error";
    } else {
        return "Unknown";
    }   
}
console.log(getStatus(200)); // returns "Success"
console.log(getStatus(404)); // returns "Client Error"
console.log(getStatus(500)); // returns "Server Error"
function logTest(name1)
{
    console.log(`Running: ${name1}`);// no return statement, so it will return undefined
}
logTest("Hii 1"); // Output: Running: Test 1