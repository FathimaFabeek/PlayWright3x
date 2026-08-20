let test_Results=["pass", "fail", "pass", "skip"];
test_Results.forEach(function(result,index){
    console.log("test"+ index + "->" +result);
});
// it finishes all iterations first, then move on