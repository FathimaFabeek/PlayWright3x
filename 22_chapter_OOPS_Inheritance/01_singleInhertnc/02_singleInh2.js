class Animal{
    constructor(name){
        this.name=name;
    }
    eat(){
        console.log(this.name+" is eating");
    }
    sleep(){
        console.log(this.name+" is sleeping");
    }
    Foo(){
        console.log("Foo");
    }
}
class Dog extends Animal{
    constructor(name, breed){
        super(name);// it is used for the parent class constructor
        this.breed=breed;
    }
    bark(){
        super.Foo();// it is used for the parent class method,child has called the parent function foo
       console.log(super.name);// it is used for the parent class property,child has called the parent property name
        // automatically parent constructor created this.name, so super will not allowed, so it will show undefined
       console.log(this.name+" is barking");
    }   }
    let dog=new Dog("Tommy", "Labrador");
    dog.eat();
    dog.sleep();
    dog.bark();
    console.log(dog.breed);