const arr = [1, 2, 3, 2, 4, 5, 3, 6];
const seen = [];

for (let i = 0; i < arr.length; i++) {
  const item = arr[i];

  if (!seen.includes(item)) {
    seen.push(item);
  }
}

console.log(seen);

