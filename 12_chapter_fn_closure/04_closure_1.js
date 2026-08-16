function makeCounter(start=0)//default parameter
{
let count=start;
return{
    increment(){count++;},
    decrement(){count--;},
    get(){return count;}
}}
const counter= makeCounter(0);
counter.increment();
counter.increment();
counter.decrement();

console.log(counter.get());