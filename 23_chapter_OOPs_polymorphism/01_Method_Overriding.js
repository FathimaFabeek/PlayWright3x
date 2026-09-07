class BaseTest{
setup(){
    console.log("Base:Open browser");
}
}
class APITest extends BaseTest{
    setup(){
        console.log("APITest:Open browser");
    }
}
let test=new APITest();//based on the object test will workdifferently
test.setup();
let btest=new BaseTest();
btest.setup();
