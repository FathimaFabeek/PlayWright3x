Promise.allSettled([
    Promise.resolve("Test A Passed"),
    Promise.reject("Test B Failed"),
    Promise.resolve("Test C Passed")
]).then(function(results){
    results.forEach(function(r,i)
{
    console.log("Test" + (i+1) +":" , r.status, "-", r.status , "-", r.value|| r.reason);

});
});// this is like test report, if you want results for all testcase, can use settle.
