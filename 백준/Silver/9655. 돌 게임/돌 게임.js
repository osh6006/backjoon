const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString();

// true 상근이 false 창영이
let winner = true;
let count = 1;

while (count < +input) {
  if (count + 3 > +input) {
    count++;
    winner = !winner;
  } else {
    count += 3;
    winner = !winner;
  }
}

winner ? console.log("SK") : console.log("CY");