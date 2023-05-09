const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const N = input.shift();
const A = input.shift().split(" ").map(Number);

let min = Infinity;
let max = 0;

let answer = "";

for (let i = 0; i < N; i++) {
  let cur = A[i];
  if (min > cur) min = cur;
  else max = Math.max(max, cur - min);
  answer += max + " ";
}

console.log(answer);
