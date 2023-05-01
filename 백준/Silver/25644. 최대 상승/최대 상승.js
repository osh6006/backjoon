const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const array = input[1].split(" ").map(Number);
let small = Infinity;
let max = 0;

for (let i = 0; i < array.length; i++) {
  if (small > array[i]) {
    small = array[i];
  }

  if (array[i] - small > max) {
    max = array[i] - small;
  }
}

console.log(max);
