let grid=[
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];
console.log(grid[0][0]);
grid[0][0]=99;// can change value
console.log(grid);
console.log(grid.length);// no of raws
console.log(grid[0].length);//no of raws
console.log([grid[grid.length-1][grid[0].length-1]]);//grid[2]grid[2].to get the last element
