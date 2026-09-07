class car{
    #engine;
    constructor(name, engine_name)
    {
        this.name=name;
        this.#engine=engine_name;
    }
    getEngine(){
        return this.#engine;
    }   
    setEngine(changed_engine_name){
        this.#engine=changed_engine_name;
        return this.#engine;
    }
}
let tesla=new car("Tesla", "V8");
console.log(tesla.getEngine());
tesla.setEngine("V6");
console.log(tesla.getEngine()); 