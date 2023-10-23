// 다시 안풀어도 됨
function solution(arr) {
    const min = Math.min(...arr);
    const answer = arr.filter(el=> el!==min);
    return answer.length === 0 ? [-1] : answer;
}