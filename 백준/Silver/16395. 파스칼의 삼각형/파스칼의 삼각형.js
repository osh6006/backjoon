const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString().split(" ").map(Number);

const answer = [];
const n = input[0];
const k = input[1];

for (let i = 1; i <= n; i++) {
  answer[i] = [];
}

answer[0] = [1];
answer[1].push(1);
answer[1].push(1);

for (let i = 2; i <= n; i++) {
  answer[i].push(1);
  // 반복
  for (let j = 0; j < answer[i - 1].length - 1; j++) {
    answer[i].push(answer[i - 1][j] + answer[i - 1][j + 1]);
  }
  answer[i].push(1);
}

console.log(answer[n - 1][k - 1]);
