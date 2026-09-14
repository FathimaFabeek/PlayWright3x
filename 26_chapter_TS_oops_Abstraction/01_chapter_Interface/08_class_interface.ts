interface executable{
    name:string;
    run():void;
    getstatus():string;
}
class Testcase implements executable{//class can implements interface
    name:string;
    constructor(name:string){
        this.name=name;
    }
    run():void{
        console.log("[RUN]"+ this.name);
    }
    getstatus():string{
        return" Pass";
    }}
    