class person{
    //hiding chldren from outside world
    #child1;
    #child2;
    //private variable can be accessed only inside the class, it will not be accessible outside the class
    constructor(name,child1, child2){
        this.name=name;
        this.#child1=child1;
        this.#child2=child2;
    }
    getChild1(){
        return this.#child1;
    }
    setChild1(changed_name){//set can change the name of the child1, it will not change the name of the child2
        this.#child1=changed_name;
        return this.#child1;
    }
}
let p= new person("Fabeek", "Vrad", "Dua");  
//console.log(p.#child1);//it will give error because child1 is private variable, it will not be accessible outside the class 
console.log(p.getChild1());
console.log(p.setChild1("Virad"));
console.log(p.getChild1());
