const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString();

let n = +input;

let A = 0;
let B = 0;
let C = 0;

while (n > 0) {
  if (n >= 300) {
    n -= 300;
    A++;
  } else if (n >= 60) {
    n -= 60;
    B++;
  } else if (n >= 10) {
    n -= 10;
    C++;
  } else {
    console.log(-1);
    return;
  }
}

console.log(`${A} ${B} ${C}`);
