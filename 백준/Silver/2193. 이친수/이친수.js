const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString();

const n = +input;

const dp = new Array(n + 1).fill(0);

dp[1] = 1n;
dp[2] = 1n;
dp[3] = 2n;

for (let i = 4; i <= n; i++) {
  dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
}

console.log(dp[n].toString());