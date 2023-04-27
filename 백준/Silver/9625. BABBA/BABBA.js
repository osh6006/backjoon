const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString();

let a = 1;
let b = 0;
let t;

for (let i = 0; i < +input; i++) {
  t = a + b;
  a = b;
  b = t;
}

console.log(a, b);
