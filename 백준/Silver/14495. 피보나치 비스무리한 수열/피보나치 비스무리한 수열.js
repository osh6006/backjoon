const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString();

const n = +input;

// dp배열을 담을 변수이다.
// 1,2,3은 모두 1이므로 미리 값을 넣어주었다.
const dp = [1n, 1n, 1n, 2n];

// 0,1,2,3 이므로 4부터 시작한다.
// 4부터 시작하는 이유는 dp의 4번째에 push해줘야 하기 때문이다.
// 116번째 까지이므로 큰 수를 계산할 수 없을 경우를 대비하여 BigInt를 써준다.
for (let i = 4; i <= n; i++) {
  dp.push(BigInt(dp[i - 1]) + BigInt(dp[i - 3]));
}

// 0부터 시작하므로 n-1번째를 구해야 한다.
console.log(dp[n - 1].toString());