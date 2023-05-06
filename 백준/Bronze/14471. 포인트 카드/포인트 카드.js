const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const [M, N] = input.shift().split(" ").map(Number);

let count = 0;
let answer = 0;

input.sort((a, b) => b.split(" ").map(Number)[0] - a.split(" ").map(Number)[0]);

while (count < N - 1) {
  const [A, B] = input.shift().split(" ").map(Number);
  if (A >= M) {
    count++;
  } else {
    for (let i = A; i < M; i++) {
      answer++;
    }
    count++;
  }
}

console.log(answer);