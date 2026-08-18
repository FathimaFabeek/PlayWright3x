let a={status:'pass'};//can use double quotes also
console.log(a.status);
console.log(a["status"]);
// keys are case sensitive
let a2={status:"pass", Status:"fail"};
console.log(a2["status"]);
console.log(a2.Status);
let x={status:"success"};
let y=x;// here the y copies the refernece and object
y.status="failed";
console.log(x.status);
console.log(y.status);
 let c={status:"pass"};
 let d={status:"pass"};
 console.log(c===d);//they arw not same . bcz they are allocated in different locations.
 console.log(history, kilometere);
 