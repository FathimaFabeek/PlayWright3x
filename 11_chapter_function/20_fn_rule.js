//can not use fn inside block scope
if(true) {
    function test() {
        return "inside if block scope";
    }}
    test();//bad behavior, it will work in some browser but not in all browser. So, avoid this type of code.
    // it will allow in fn As expression function but not in normal function. So, avoid this type of code.
    let test1;
    if(true)
        {
            test1 = function() {
        return "inside if block scope";
    }}
    console.log(test1());//it will work because fn as expression is allowed inside block scope.