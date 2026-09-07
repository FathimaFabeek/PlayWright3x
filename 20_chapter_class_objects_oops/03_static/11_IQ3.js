let a=10;// global variable can acccessible anywhere in the program
class car{
    b=10;
constructor(name, model){  
    console.log("a value is: "+a);    
    console.log(this.b); 
}
}
let obj=new car();
let obj2=new car();
