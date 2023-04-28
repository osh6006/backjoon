const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString().split(" ");

const max = getMinMax(input[0], "max") + getMinMax(input[1], "max");
const min = getMinMax(input[0], "min") + getMinMax(input[1], "min");

console.log(`${min} ${max}`);

function getMinMax(number, minmax) {
  if (minmax === "max") {
    return Number(
      number
        .split("")
        .map((el) => {
          if (el === "5") {
            el = "6";
          }
          return el;
        })
        .join("")
    );
  } else {
    return Number(
      number
        .split("")
        .map((el) => {
          if (el === "6") {
            el = "5";
          }
          return el;
        })
        .join("")
    );
  }
}