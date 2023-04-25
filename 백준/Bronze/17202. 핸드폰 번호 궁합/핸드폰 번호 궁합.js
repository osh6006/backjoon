const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "DP/test.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((el) => el.trim());

// shake
let man = input[0];
let woman = input[1];
let answer = "";

for (let i = 0; i < man.length; i++) {
  answer += `${man[i]}${woman[i]}`;
}

while (answer.length !== 2) {
  let tempNum = "";
  for (let i = 0; i < answer.length; i++) {
    if (answer[i + 1]) {
      tempNum += `${(+answer[i] + +answer[i + 1]) % 10}`;
    }
  }
  answer = tempNum;
}

console.log(answer);