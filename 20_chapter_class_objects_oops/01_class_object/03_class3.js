class car{

    //constructor()- it is default constructor which is called when we create object of class
    //{

    //}
    constructor(assigned_name)// it is parameterised constructor which is called when we create object of class and we can pass value to it
    {
        this.name=assigned_name;

    }
}
let hyndai_i10=new car("i10");
console.log(hyndai_i10.name);
let hyndai_creat=new car("creta");
console.log(hyndai_creat.name);
