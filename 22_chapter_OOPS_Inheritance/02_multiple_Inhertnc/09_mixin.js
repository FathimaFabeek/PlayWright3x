//canuse multiple inheritanc with use of mixins
let loggerMixin=function(base){
    return class extends base{
        log(msg){
            console.log("[LOG"+msg);
        }}}
let ScreenshotMixin= function(base){
    return class extends base{
        takeScreenshot(){
            console.log("[SCREENSHOT] captured");
        }}}
//base classs
class TestCase{
    constructor(name){
        this.name=name;
    }
    run(){
        console.log("Running: "+this.name);
    }}
class smartTest extends ScreenshotMixin(loggerMixin(TestCase)){
    constructor(name){
        super(name);
    }
}
let t=new smartTest("loginFlow");
t.run();
t.log("test started");
t.takeScreenshot();