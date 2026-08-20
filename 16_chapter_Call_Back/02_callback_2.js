function test(abcd, callmeWhenDone)
{
console.log("hi start the testcase");
callmeWhenDone();
}
test("verify the login page is working..", async (page)=>{

    console.log("its done");
});