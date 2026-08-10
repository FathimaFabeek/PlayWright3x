const arr = [1, 2, 1, 3, 2];

// This empty object will store how many times each number appears.
const frequency = {};

// Go through each item in the array.
for (let i = 0; i < arr.length; i++) {
  const item = arr[i];

  // If we have not seen this item before, start counting from 1.
  // If we have seen it before, add 1 more.
  frequency[item] = (frequency[item] || 0) + 1;
}

// Print the result for each number.
for (const item in frequency) {
  console.log(`${item} appears ${frequency[item]} times`);
}

