//primitive types
let name: String="john";
let age: number= 20;
let pi: number=3.14;
//let pi1: float=3.14; no float used ts
let isActive: Boolean= true;
let nothing:null =null;
let notDefined: undefined=undefined;
//Arrays
let numbers: number[]=[1,2,3];
let names:Array<string>=["John", "Jame"];
// Any(can avoid when possible)
let anything: any="hello";//use evn no idea about data type, here any will become string
let Unknown: unknown="hello";
let message:string="hello, type script";
let count:number=12;
console.log(message);
console.log(isActive);
console.log(anything);
