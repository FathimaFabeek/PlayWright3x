class user{
    constructor(name){
        this.name=name;
    }
    greet(){
        console.log("Hello "+this.name);
    }
}
let u1=new user("Pramod");  
let u2=new user("Ramesh");
u1.greet(); 
u2.greet();