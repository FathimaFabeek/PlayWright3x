//multiple inheritance is not possible in javascript but we can achieve it using mixins
// one parent has many children
class TestCase{
    execute(){
        console.log("BaseTest execute method");
    }}
    class   UnitTest extends TestCase{
        execute(){
            console.log("UnitTest execute method");
        }   }
        class APITest extends TestCase{
            execute(){
                console.log("APITest execute method");
            }}
            class E2ETest extends TestCase{
                execute(){
                    console.log("E2ETest execute method");
                }}
                let Tests=[new UnitTest(), new APITest(), new E2ETest()];   
                Tests.forEach(function(test){
                    test.execute();
                });