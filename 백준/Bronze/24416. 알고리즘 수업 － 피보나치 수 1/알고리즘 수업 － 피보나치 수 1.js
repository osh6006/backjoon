const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "DP/test.txt";
const input = fs.readFileSync(filePath).toString();

let count1 = 0;
let count2 = 0;

function fib(n) {
  if (n === 1 || n === 2) {
    count1++;
    return 2;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

function fibonacci(n) {
  const array = [0, 1];
  for (let i = 2; i < n; i++) {
    array[i + 1] = array[i] + array[i - 1];
    count2++;
  }
}

// exe
fib(+input);
fibonacci(+input);

const answer = `${count1} ${count2}`;
console.log(answer);
