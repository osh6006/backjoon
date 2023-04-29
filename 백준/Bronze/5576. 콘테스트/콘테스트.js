const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString().split("\n").map(Number);

// 0 <= m < 10 && 10 <= m < 20
const W = input.slice(0, 10).sort((a, b) => b - a);
const K = input.slice(10, 20).sort((a, b) => b - a);

console.log(`${W[0] + W[1] + W[2]} ${K[0] + K[1] + K[2]}`);