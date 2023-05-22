const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString();

const N = +input;
const dp = [0, 1, 0, 1, 1];

for (let i = 5; i <= N; i++) {
  if (dp[i - 1] + dp[i - 3] + dp[i - 4] < 3) dp[i] = 1;
  else dp[i] = 0;
}

let answer = "";
dp[N] === 1 ? (answer = "SK") : (answer = "CY");

console.log(answer);