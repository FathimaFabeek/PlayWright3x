class Test_Runner{
    static total_testcase=0;
    static pass_count=0;
    constructor(name, passed){
        this.name=name;
        this.passed=passed;
        Test_Runner.total_testcase++;   
        if(passed){
            Test_Runner.pass_count++;
        }
    }
    non_static_display(){
        return this.name;
    }     
       static summary(){
        return Test_Runner.pass_count +"/"+ Test_Runner.total_testcase+"Passed";
    }
}
//name - non static
//total testcase and passcount- static
new Test_Runner("login", true);//testcase 1 and pass count 1
new Test_Runner("signUp", false);//testcase 2 and pass ocunt 1
new Test_Runner("cart", true);//testcase 3 and passcount2
new Test_Runner("checkout", true);//testcase 4 and passcount3
console.log(Test_Runner.summary());