let tests=["login", "checkout", "search"];
for(let i=0; i<tests.length ; i++)
{
    console.log(tests[i]);
}
console.log("--------");
//another for loop in JS IS for..of
for(let dua of tests)
{
    console.log(dua);
}
// another version is forEach
console.log("------");
tests.forEach((dua,index)=>
{
    console.log(`${index}: ${dua}`);
}
);
console.log("-------");
//in function
let students=["fathima", "dua", "fabeek", "lukman"];
for(let student in students)
{
    console.log(student,"->" , students [student]);
}