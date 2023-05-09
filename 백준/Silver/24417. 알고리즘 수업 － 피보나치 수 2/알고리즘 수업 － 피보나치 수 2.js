const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString().split(" ");

const n = +input;

let A = 1;
let B = 1;

for (let i = 2; i < n; i++) {
  let tmp = A + B;
  if (tmp > 1000000006) tmp -= 1000000007;
  A = B;
  B = tmp;
}

console.log(B, (n - 2) % 1000000007);