const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString();

const dp = [0, 1, 1];
const n = +input;

for (let i = 2; i <= n; i++) {
  dp[i] = BigInt(dp[i - 2]) + BigInt(dp[i - 1]);
}

if (n === 1) {
  console.log(4);
} else if (n === 2) {
  console.log(6);
} else {
  const width =
    BigInt(dp[dp.length - 2]) + BigInt(dp[dp.length - 1]) + (BigInt(dp[dp.length - 2]) + BigInt(dp[dp.length - 1]));
  const height = BigInt(dp[dp.length - 1]) + BigInt(dp[dp.length - 1]);

  const answer = width + height;
  console.log(answer.toString());
}
