const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString().split(" ");

const [R, C, W] = input.map(Number);
let pascal = [];

for (let i = 0; i <= 30; i++) {
  pascal[i] = [];
  for (let j = 0; j <= i; j++) {
    if (j === 0 || j === i) {
      pascal[i][j] = 1;
    } else {
      pascal[i][j] = pascal[i - 1][j - 1] + pascal[i - 1][j];
    }
  }
}

let answer = 0;

for (let i = 0; i < W; i++) {
  for (let j = 0; j <= i; j++) {
    answer += pascal[R - 1 + i][C - 1 + j];
  }
}

console.log(answer);
