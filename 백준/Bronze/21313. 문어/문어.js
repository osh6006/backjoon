const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString();
const N = +input;

let answer = "";
if (N % 2 === 0) {
  for (let index = 0; index < N / 2; index++) {
    answer += "1 2 ";
  }
} else {
  let temp = N - 1;
  for (let index = 0; index < temp / 2; index++) {
    answer += "1 2 ";
  }
  answer += "3";
}

console.log(answer.trim());