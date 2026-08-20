var sum = 0;
for (var i = 1; i <= 5; i++);
  sum += i;
 console.log(sum);
//answer is 6 as the there is a semicolon after for loop otherwis ethe answer is 16
//for (var i = 1; i <= 5; i++); means the loop has an empty body.
//So the loop does not add anything to sum.
//It just runs, increasing i until it becomes 6.
let j = 0;
while (j < NaN) {
  j++;
}
console.log(j);
//NaN means “Not a Number”.
//The condition i < NaN is always false, because comparisons with NaN are never true.
//So the loop body is skipped immediately.
let k = 3, count = 0;
do {
  count++;
} while (k-- > 0);
console.log(count + " " + k);
//The loop body runs first:
//count++ → count becomes 1
//Then the condition is checked:
//i-- > 0 means:
//first check: 3 > 0 → true, so i becomes 2
//The loop repeats:
//count becomes 2
//2 > 0 → true, so i becomes 1
//Again:
//count becomes 3
//1 > 0 → true, so i becomes 0
//Finally:
//count becomes 4
//0 > 0 → false, so loop stops
