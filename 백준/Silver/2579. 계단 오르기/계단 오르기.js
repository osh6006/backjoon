const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const n = +input.shift();
const stairs = input.map(Number);

const dp = new Array(n).fill(0);

dp[0] = stairs[0];
dp[1] = stairs[0] + stairs[1];
dp[2] = Math.max(stairs[0], stairs[1]) + stairs[2];

for (let i = 3; i < stairs.length; i += 1) {
  dp[i] = Math.max(dp[i - 2] + stairs[i], dp[i - 3] + stairs[i - 1] + stairs[i]);
}

console.log(dp[n - 1]);