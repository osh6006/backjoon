const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

// 마을의 숫자와 마을의 이동비용을 담은 배열
const n = +input.shift();
const V = input.shift().split(" ").map(Number);

// 최소 비용을 계산하기 위해 오름차순으로 정렬한다.
V.sort((a, b) => a - b);

// 정렬한 값을 모두 더해준다.
const answer = V.reduce((prev, curr) => {
  prev += curr;
  return prev;
});

// 마지막 마을은 비용을 계산해도 되지 않기 때문에 정렬된 배열에서
// 제일 마지막 값을 빼준다.
console.log(answer - V[V.length - 1]);