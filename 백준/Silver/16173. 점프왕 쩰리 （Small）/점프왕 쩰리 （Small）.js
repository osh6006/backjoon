const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

// 맵의 크기와 정제되지 않은 맵이다.
const [n, ...tempMap] = input;

// 정제된 진짜 맵이다.
const map = tempMap.map((el) => {
  return el.split(" ").map(Number);
});

// BFS가 해당 좌표를 방문했는지 안했는지 확인하는 배열이다.
// 2차원배열로 map과 같은 크기로 초기화 해준다.
const visited = Array.from({ length: n }, () => new Array(n).fill(false));

// 큐를 통해서 BFS를 구현한다.
// ‘쩰리’의 출발점은 항상 정사각형의 가장 왼쪽, 가장 위의 칸이다. 다른 출발점에서는 출발하지 않는다.
const queue = [[0, 0]];

// 젤리가 이동 가능한 방향은 오른쪽과 아래 뿐이다. 위와 왼쪽은 이동할 수 없다.
const dx = [0, 1]; // x 방향 이동 (아래, 오른쪽)
const dy = [1, 0]; // y 방향 이동 (아래, 오른쪽)

// 코드 시작

// 젤리는 출발점에서 시작하므로 방문 배열의 첫번째를 true로 해준다.
visited[0][0] = true;

while (queue.length) {
  const [x, y] = queue.shift();

  if (map[x][y] === -1) {
    // 승리 지점에 도달하면 종료
    console.log("HaruHaru");
    return;
  }

  for (let i = 0; i < 2; i++) {
    const nx = x + dx[i] * map[x][y]; // 해당 멥의 숫자만큼 x 이동
    const ny = y + dy[i] * map[x][y]; // 해당 맵의 숫자만큼 y 이동

    if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue; // 범위 밖인 경우 통과시킨다.
    if (visited[nx][ny]) continue; // 이미 방문한 경우 통과시킨다.

    visited[nx][ny] = true; // 방문 처리
    queue.push([nx, ny]); // 다음 위치 추가
  }
}
// 승리 지점에 도달하지 못한 경우
console.log("Hing");