const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filepath).toString().split("\n");

const N = +input.shift();

for (let i = 0; i < N; i++) {
  let worm = 0;
  const [M, N, K] = input.shift().split(" ").map(Number);

  // 땅 만들기
  let graph = [...Array(M)].map((e) => Array(N).fill(0));

  // 배추 심기
  for (let j = 0; j < K; j++) {
    const [row, column] = input.shift().split(" ").map(Number);
    // 입력예제를 보면 1 0이라고 되어있다 따라서 column row로 해준다.
    graph[row][column] = 1;
  }

  // 지렁이 풀기
  for (let k = 0; k < M; k++) {
    for (let l = 0; l < N; l++) {
      //만약 그 좌표가 1이라면 worm을 늘려주고 상하좌우 탐색하여 전부 0으로 만들어준다.
      if (graph[k][l]) {
        bfs(graph, k, l, M, N);
        worm++;
      }
    }
  }

  console.log(worm);
}

function bfs(map, start, end, M, N) {
  const dx = [-1, 0, 1, 0]; // 좌하우상 이동
  const dy = [0, 1, 0, -1];

  const queue = [[start, end]];

  while (queue.length) {
    const [x, y] = queue.shift();

    if (!map[x][y]) continue;
    else map[x][y] = 0;

    // 상하좌우 탐색해서 1이 있으면 queue에 push해준다.
    for (let i = 0; i < 4; i++) {
      const xPos = x + dx[i];
      const yPos = y + dy[i];

      if (xPos < 0 || yPos < 0 || xPos >= M || yPos >= N) continue;
      if (map[xPos][yPos]) queue.push([xPos, yPos]);
    }
  }
}