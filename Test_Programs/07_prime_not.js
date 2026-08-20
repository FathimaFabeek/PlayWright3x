let num = 8;
let isPrime = true;

if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
        }
    }
}
if (isPrime) {
    console.log("Prime Number");
} else {
    console.log("Not a Prime Number");
}