let results=["pass", "fail", "pass"];
console.log(results);
//to get a 3x3 matrix
let grid= [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
for(let i=0; i<3; i++)
{
 for (let j=0; j<3; j++)
 {
    process.stdout.write(grid[i][j]+" ");
 }
 console.log("");//to prtint new line
}