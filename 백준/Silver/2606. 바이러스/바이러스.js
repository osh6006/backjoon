const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filepath).toString().split("\n");

const N = +input.shift();
const M = +input.shift();

const graph = Array.from(Array(N + 1), () => []);
const visited = Array.from(Array(N + 1), () => false);

for (let i = 0; i < M; i++) {
  const [first, second] = input[i].split(" ").map(Number);
  graph[first].push(second);
  graph[second].push(first);
}

// BFS
const queue = [1];
visited[1] = true;

while (queue.length > 0) {
  const from = queue.shift();
  for (const to of graph[from]) {
    if (!visited[to]) {
      queue.push(to);
      visited[to] = true;
    }
  }
}

const answer =
  visited.reduce((prev, curr) => {
    if (curr) prev++;
    return prev;
  }, 0) - 1;

console.log(answer);