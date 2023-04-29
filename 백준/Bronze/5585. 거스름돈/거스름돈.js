const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString();

let money = 1000 - +input;
let count = 0;

while (money > 0) {
  if (money >= 500) {
    money -= 500;
  } else if (money >= 100) {
    money -= 100;
  } else if (money >= 50) {
    money -= 50;
  } else if (money >= 10) {
    money -= 10;
  } else if (money >= 5) {
    money -= 5;
  } else if (money >= 1) {
    money -= 1;
  }

  count++;
}

console.log(count);
