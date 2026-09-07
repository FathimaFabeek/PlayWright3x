//method over riding
class BaseTest{
    setup(){
        console.log("BaseTest setup method");
    }
}
class APITest extends BaseTest{
    setup(){
        //super.setup();//it will call the parent class method, if we want to call the parent class method, we can use super keyword  
        console.log("APITest setup method");
    }   }
    let test=new APITest();
    test.setup();//child class method will be called, because child class method is overriding the parent class method//
    //here object of APITest , so APITest's setup will called, if we want to call the parent class method, we can use super keyword