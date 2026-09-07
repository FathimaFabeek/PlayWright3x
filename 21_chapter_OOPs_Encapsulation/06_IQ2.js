class Environment{
    constructor(name="staging", port=3000){//default parameter
        this.name=name;
        this.port=port;
    }
    getUrl(){
        return "http://"+this.name+":"+this.port;
    }
}
let env1=new Environment();
console.log(env1.getUrl());
let env2=new Environment("production", 8080);
console.log(env2.getUrl());