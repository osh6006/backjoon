const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString();

let n = +input;

let count = 0;

while (n > 0) {
  if (n === 1) {
    count = -1;
    break;
  }
  if (n % 5 !== 0) {
    n -= 2;
    count++;
  } else {
    n -= 5;
    count++;
  }
}

console.log(count);