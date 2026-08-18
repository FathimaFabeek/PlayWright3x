let scores=[
    [85, 90, 78],
    [60, 45, 70],
    [95, 88, 92]
];
let rowsum=scores.map(row=> row.reduce((a,b)=>a+b));
console.log(rowsum);
let suit_results=[
    ["LoginPass", "register-pass", "logout-pass"],
    ["search-pass", "filter-fail", "sort-pass"],
    ["checkout-fail", "payment-fail", "confirm-pass"]
];
for(let i=0; i<suit_results.length; i++)
{
    for(let j=0; j<suit_results[i].length; j++)
    {
        if(suit_results[i][j].includes("fail"))
        {
            console.log(suit_results[i][j]);
        }
    }
}