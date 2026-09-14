
//method in interface
interface Calculator{
    add(a:number, b:number):number;
    subtract(a:number, b:number):number;
}
const calc: Calculator={
    add:(a,b)=> a+b,
    subtract:(a,b)=> a-b

}
interface india{
    standUPNationalAnthem(a:string):string;

}
const fathi:india={
    standUPNationalAnthem:a=>""

}
calc.subtract(13,4);