class TestRunner{
    static total_testcase=0;
    static pass_count=0;
    constructor(name, passed){
        this.name=name;
        this.passed=passed;
        TestRunner.total_testcase++;   
        if(passed){
            TestRunner.pass_count++;
        }
    }
}
//name - non static
//total testcase- static
let t1=new TestRunner("login", true);//testcase 1 and pass count 1
let t2=new TestRunner("signinTest", false);//testcase 2 and pass ocunt 1
let t3=new TestRunner("DashboardTest", true);//testcase 3 and passcount2
let t4=new TestRunner("SupportTest", true);//testcase 4 and passcount3
console.log("Total Test Cases: "+TestRunner.total_testcase);
console.log("Total Pass Test Cases: "+TestRunner.pass_count);
