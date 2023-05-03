const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filepath).toString().split(" ");

let A = +input.shift();
const K = +input.shift();

let count = 0;
let temp = K;

const stack = [];
stack.push({ value: K, rest: 0 });

while (true) {
  if (A > Math.floor(temp / 2)) {
    break;
  } else {
    stack.push({ value: Math.floor(temp / 2), rest: temp % 2 });
    temp = Math.floor(temp / 2);
  }
}

count = temp - A;

while (stack.length > 0) {
  let test = stack.pop();
  count += test.rest;
  count++;
}

console.log(count - 1);
