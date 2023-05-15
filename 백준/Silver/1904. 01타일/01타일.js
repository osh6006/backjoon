const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString();

const n = +input;

const dp = [0, 1, 2, 3, 5];

for (let i = 5; i <= n; i++) {
  dp.push((dp[i - 1] + dp[i - 2]) % 15746);
}

console.log(dp[n]);
