const arr = [12, 5, 8, 3, 15, 7];
let smallest = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < smallest) {
    smallest = arr[i];
  }
}

console.log("Smallest element:", smallest);
