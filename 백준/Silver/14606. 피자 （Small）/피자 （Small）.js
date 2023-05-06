const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString();

let n = +input;

function dividePizzaTop(n) {
  if (n <= 1) return 0;
  const temp = Math.floor(n / 2) * (n - Math.floor(n / 2));
  return temp + dividePizzaTop(Math.floor(n / 2)) + dividePizzaTop(n - Math.floor(n / 2));
}

console.log(dividePizzaTop(n));