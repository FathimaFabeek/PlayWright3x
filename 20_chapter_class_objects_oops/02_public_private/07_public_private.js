// private-# hidden data
//public - normal
class credentials{
    #ApiKey;// private variable, can accessed only inside the class, not outside the classS
    user;
    constructor(user, key)
    {
        this.user=user;       
         this.#ApiKey=key;
    }

// custom made fun by us
PramodgetAuthHeader(){
    return "Bearer "+this.#ApiKey;
}
}
let cred=new credentials("Pramod","abc123");
console.log(cred.user);
console.log(cred.PramodgetAuthHeader());
console.log(cred.ApiKey); //it will give error, bcz it is private variable 