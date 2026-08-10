const arr = [1, 2, 3, 2, 4, 5, 3, 6];
const seen = [];
const duplicates = [];

for (let i = 0; i < arr.length; i++) {
  const item = arr[i];

  if (seen.includes(item)) {
    if (!duplicates.includes(item)) {
      duplicates.push(item);
    }
  } else {
    seen.push(item);
  }
}

for (let i = 0; i < duplicates.length; i++) {
  console.log(duplicates[i]);
}

