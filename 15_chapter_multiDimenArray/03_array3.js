let test=[
    ["login", "pass", 200],
    ["checkout", "fail", 404],
    ["search", "pass", 180]
];
for(let i=0; i<test.length; i++)
{
    for (let j=0; j<test[i].length; j++)
    {
        process.stdout.write(test[i][j]+" ");
    }
    console.log("");
}