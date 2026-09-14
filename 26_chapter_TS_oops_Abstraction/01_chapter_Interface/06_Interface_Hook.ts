interface TestHook{
    (testName:string):void;// anonyms fnctn


}
let beforEachHook:TestHook=function(testName:string):void{
    console.log("[BEFORE] Setting up: "+testName);

}
let afterEachHook:TestHook=function(testName:string):void{
    console.log("[AFTER] Tearing down: "+testName);

}
beforEachHook("login Test");
//rarely used this concept


