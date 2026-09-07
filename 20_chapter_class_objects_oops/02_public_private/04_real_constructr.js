class Testcase{
    constructor(name, status, priority){
        this.name=name;
        this.status=status;
        this.priority=priority;
    }

    display(){
        console.log(this.name+ "-> "+this.status+"-> "+this.priority);
        }
}
let loginTest=new Testcase("Login Test", "Pass", "High");
let signupTest=new Testcase("Signup Test", "Fail", "Medium");
loginTest.display();
signupTest.display();