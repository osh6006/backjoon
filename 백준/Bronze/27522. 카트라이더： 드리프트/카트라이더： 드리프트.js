const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

let Rscore = 0;
let Bscore = 0;
let Score = 10;

input.sort((a, b) => {
  let atime = a.split(" ")[0];
  let btime = b.split(" ")[0];

  const [min1, sec1, ms1] = atime.split(":").map(Number);
  const [min2, sec2, ms2] = btime.split(":").map(Number);

  const t1 = new Date(0, 0, 0, 0, min1, sec1, ms1);
  const t2 = new Date(0, 0, 0, 0, min2, sec2, ms2);

  if (t1 < t2) {
    return -1;
  } else if (t1 > t2) {
    return 1;
  } else {
    return 0;
  }
});

input.forEach((el, i) => {
  let team = el.split(" ").map((el) => el.trim());
  if (team[1] === "R") {
    Rscore += Score;
  } else {
    Bscore += Score;
  }

  if (Score > 6) {
    Score -= 2;
  } else {
    Score -= 1;
  }
});

console.log(`${Rscore > Bscore ? "Red" : "Blue"}`);