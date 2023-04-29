const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString().split(" ").map(Number);


input.sort((a,b)=>a-b);
let answer = "";
for(let item of input){
    answer += item+= " ";
}

console.log(answer);

