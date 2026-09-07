class BaseTest{
    constructor(){
        console.log("parent class constructor");
    }
    setup(){
        console.log("BaseTest setup method");
    }
    teardown(){ 
        console.log("BaseTest teardown method");
    }
}
class UItest extends BaseTest{
    constructor(){
        super();//it will call the parent class constructor, if we want to call the parent class constructor, we can use super keyword  
        console.log("child class constructor");
    }
    setup(){
        super.setup();//it will call the parent class method, if we want to call the parent class method, we can use super keyword  
        console.log("UItest setup method");
    }
teardown(){
        super.teardown();//it will call the parent class method, if we want to call the parent class method, we can use super keyword  
        console.log("UItest teardown method");
    }   }
    let test=new UItest();
    test.setup();
    test.teardown();