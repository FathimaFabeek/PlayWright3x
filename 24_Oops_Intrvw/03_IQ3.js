class user{
    constructor(name){
        this.name=name;
    }
    greet(){
        console.log("Hello "+this.name);
    }
}
let u1=new user("Alice");  
let u2=new user("Bob");
u1.greet(); 
u2.greet();