// 안풀어도 됨.
function solution(n) {
    let answer = "";
    for(let i = 1; i<=n; i++){
        const temp = i % 2 !== 0 ? "수" : "박"
        answer += temp;
    }
    return answer;
}