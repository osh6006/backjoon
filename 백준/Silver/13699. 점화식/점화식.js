const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString();

const n = +input;

  let dp = Array.from({ length: n + 1 }, () => 0);
  dp[0] = 1n;
  dp[1] = 1n;
  for (let i = 2; i <= n; i++) {
    let sum = 0n;
    for (let j = 0; j < i; j++) {
      sum += BigInt(dp[j]) * BigInt(dp[i - j - 1]);
    }
    dp[i] = sum;
  }

console.log(dp[n].toString());