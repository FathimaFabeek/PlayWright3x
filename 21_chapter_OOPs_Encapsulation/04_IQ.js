class TestCase{
    #status="not run";
    static #count=0;
    constructor(name){
        this.name=name;
        TestCase.#count++;
    }
    run(pass){
        this.#status=pass? "pass":"fail";

    }
    getStatus(){
        return this.#status;
    }
    // setStatus(v){
    //     throw new Error("Status is ReadOnly and callrun() to change it");
    // }
}
const tc=new TestCase("LoginTest");
tc.run(true);
console.log(tc.getStatus());
//console.log(TestCase.#count); // This will throw an error because #count is private .
//it can use with using getter and setter methods

