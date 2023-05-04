const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const n = +input[0];
const dp = new Array(n + 1).fill(Infinity);
const arr = input[1].split(" ").map(Number);
arr.unshift(0);

dp[1] = 0;

for (let i = 1; i <= n; i++) {
  if (dp[i] >= Infinity) continue;
  for (let j = 1; j <= arr[i]; j++) {
    dp[i + j] = Math.min(dp[i + j], dp[i] + 1);
  }
}

if (dp[n] >= Infinity) {
  console.log(-1);
} else {
  console.log(dp[n]);
}
