const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString().split(" ");

const n = +input;

let dp = [0, 1, 1];

for (let i = 2; i <= n; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
}

console.log(dp[n]);
