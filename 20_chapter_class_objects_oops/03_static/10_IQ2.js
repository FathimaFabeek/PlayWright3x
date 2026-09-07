class Student{
    static college_name="PlayWright Batch";
    constructor(name){
        this.name=name;
    }
    static display(){
       console.log(this.name+" are part of  "+Student.college_name);
    }
}
let amit=new Student("Amit");
let pramod=new Student("Pramod");
console.log(Student.college_name); 
console.log(amit.name);
console.log(pramod.name);
Student.display(amit.name);  
Student.display(pramod.name);  