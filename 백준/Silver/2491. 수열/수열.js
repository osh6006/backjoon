const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const array = input[1].split(" ").map(Number);
let dp = [];

let smallCount = 1;
let bigCount = 1;

if (array.length === 1) {
  console.log(1);
} else {
  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
      dp.push(smallCount);
      bigCount++;
      smallCount = 1;
    } else if (array[i] === array[i - 1]) {
      smallCount++;
      bigCount++;
    } else if (array[i] < array[i - 1]) {
      dp.push(bigCount);
      smallCount++;
      bigCount = 1;
    }
  }
  dp.push(bigCount);
  dp.push(smallCount);
  console.log(Math.max(...dp));
}