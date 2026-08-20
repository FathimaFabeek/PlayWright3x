function makeCounter(start=0)//default parameter
{
let count=start;
return{
    increment(){count++;},
    decrement(){count--;},
    get(){return count;}
}}
const counter= makeCounter(0);// still execution finished , again 
counter.increment();// these inner fns remembers the outer fn.that is closure.
counter.increment();
counter.decrement();

console.log(counter.get());