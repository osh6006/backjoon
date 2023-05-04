const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
const dy = [0, 1, 1, 1, 0, -1, -1, -1];

while (input.length) {
  const [row, col] = input.shift().split(" ").map(Number);
  if (row === 0 && col === 0) break;

  // 맵 만들기
  // let map = Array.from(new Array(row), () => []);
  // let visited = Array.from(new Array(col), () => new Array(row).fill(false));

  let map = [];
  let visited = [];

  for (let i = 0; i < col; i++) {
    map[i] = input[i].split(" ").map(Number);
    visited[i] = new Array(col).fill(false);
  }

  for (let i = 0; i < col; i++) {
    const tempRow = input.shift().split(" ").map(Number);
    for (let j = 0; j < row; j++) {
      map[i].push(tempRow[j]);
    }
  }

  // 섬의 개수 세기
  let islands = 0;
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (map[i][j] === 1) {
        bfs(i, j, map, visited, row, col);
        islands++;
      }
    }
  }

  console.log(islands);
}

// bfs
function bfs(startX, startY, map, visited, row, col) {
  const queue = [[startX, startY]];
  visited[startX][startY] = true;

  while (queue.length) {
    const [x, y] = queue.shift();

    // 대각선 까지 검색
    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && ny >= 0 && nx < col && ny < row && map[nx][ny] === 1 && !visited[nx][ny]) {
        queue.push([nx, ny]);
        map[nx][ny] = 0;
        visited[nx][ny] = true;
      }
    }
  }
}

