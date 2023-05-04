const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString();

let count = +input;
let winner = true;

while (count > 0) {
  if (count > 3) {
    count -= 3;
    winner = !winner;
  } else {
    count -= 1;
    winner = !winner;
  }
}

console.log(`${winner ? "SK" : "CY"}`);
