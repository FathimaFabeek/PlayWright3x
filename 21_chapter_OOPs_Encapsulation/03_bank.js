class ICICI{
    #balance;
    constructor(name, balance){
        this.name=name;
        this.#balance=balance;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name=name;
        return this.name;
    }
    getBalance(){
        return this.#balance;
    }   
    setBalance(balance, IsCashier){
        if(IsCashier)
        {
             this.#balance=balance;
             return this.#balance;
        }
        else
        {
            console.log("You are not authorized to change the balance");
        }  
    }
}
let pramod=new ICICI("Pramod", 10000);
console.log(pramod.getBalance());
pramod.setBalance(20000, false);    
console.log(pramod.getBalance());