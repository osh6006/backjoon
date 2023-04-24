const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(Number);

let length = input.shift();
let count0 = 0;
let count1 = 0;

let answer = "";

for (let i = 0; i < length; i++) {
  count0 = 0;
  count1 = 0;
  fibonacci(input[i]);
  answer += `${count0} ${count1}\n`;
}

function fibonacci(n) {
  if (n == 0) {
    count0++;
    return 0;
  } else if (n == 1) {
    count1++;
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(answer.trim());
