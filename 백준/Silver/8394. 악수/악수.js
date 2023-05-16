const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString();

const n = +input;
let a = 1;
let b = 2;

for (let i = 2; i < n; i += 1) {
  let tempA = a.toString().length;
  let tempB = b.toString().length;

  let temp = b;
  b = Number(a.toString()[tempA - 1]) + Number(b.toString()[tempB - 1]);
  a = temp;
}

let answer = b.toString();
console.log(answer[answer.length - 1]);