const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((el) => el.trim());

let alphabet = {};
let score = [3, 2, 1, 2, 3, 3, 2, 3, 3, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 2, 1];
let [HIM, HER] = input;
let count = 0;
let mix = [];
let dp = [];

for (let i = 65; i <= 90; i++) {
  alphabet[String.fromCharCode(i)] = score[count];
  count++;
}

for (let i = 0; i < HIM.length; i++) {
  mix.push(alphabet[HIM[i]]);
  mix.push(alphabet[HER[i]]);
}

while (mix.length > 2) {
  for (let i = 1; i < mix.length; i++) {
    if (mix[i - 1] + mix[i] >= 10) {
      dp[i - 1] = mix[i - 1] + mix[i] - 10;
    } else {
      dp[i - 1] = mix[i - 1] + mix[i];
    }
  }
  mix = [...dp];
  dp = [];
}

console.log(mix.join(""));