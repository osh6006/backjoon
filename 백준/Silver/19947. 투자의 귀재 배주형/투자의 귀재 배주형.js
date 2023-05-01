const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString().split(" ").map(Number);

const H = input[0];
const Y = input[1];

let dp = [H];

for (let i = 1; i <= Y; i++) {
  if (i >= 5) {
    dp[i] = Math.max(dp[i - 1] * 1.05, dp[i - 3] * 1.2, dp[i - 5] * 1.35);
  } else if (i >= 3) {
    dp[i] = Math.max(dp[i - 1] * 1.05, dp[i - 3] * 1.2);
  } else {
    dp[i] = dp[i - 1] * 1.05;
  }
  dp[i] = Math.floor(dp[i]);
}
console.log(dp[Y]);