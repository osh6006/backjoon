const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

let N = +input.shift();
const A = input.shift().split(" ").map(Number);

const dp = Array(N + 1).fill(0);

for (let i = N; i > 0; i--) {
  dp[i] = (dp[i + A[i - 1] + 1] ?? 0) + 1;
}

console.log(dp.slice(1).join(" "));



