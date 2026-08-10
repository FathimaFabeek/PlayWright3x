//map method is used to create a new array from an existing array by applying a function to each element of the original array.
let scores=[45,82,91,60,73];
let grade=scores.map(s=> s>70 ? "pass" : "fail");
console.log(grade);
//filter method is used to create a new array with all elements that pass the test implemented by the provided function.
let scores2=[45,82,91,60,73];
let passingScores=scores2.filter(s=> s>70);
console.log(passingScores);
//reduce
let total=scores2.reduce((sum,s)=>sum+s,0);
console.log(total);
//sorting
let fruits=["banana","apple","cherry"];
fruits.sort();
console.log(fruits);    
let mrk=[4,3,2];
console.log(mrk.sort()); //ascending order.let mrk2=[4,3,2];
console.log(mrk.sort((a,b)=>b-a)); //descending o   rder
let nmbr=[10,21,2,1,3];
console.log(nmbr.sort()); //ascending order natural sorting
console.log(nmbr.sort((a,b)=>a-b)); //ascending order
console.log(nmbr.sort((a,b)=>b-a)); //descending order
console.log(nmbr);
console.log(nmbr.reverse()); //reverse the array