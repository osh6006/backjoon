const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString().split("\n").map(Number);

let n = input.shift();
let answer = "";

for (let i = 0; i < n; i++) {
  let item = input[i];
  let temp = "";
  let Quarter = 0;
  let Dime = 0;
  let Nickel = 0;
  let Penny = 0;

  while (item > 0) {
    if (item >= 25) {
      Quarter++;
      item -= 25;
    } else if (item >= 10) {
      Dime++;
      item -= 10;
    } else if (item >= 5) {
      Nickel++;
      item -= 5;
    } else if (item >= 1) {
      Penny++;
      item -= 1;
    }
  }

  temp += `${Quarter} ${Dime} ${Nickel} ${Penny}`;
  answer += temp + "\n";
}

console.log(answer);
