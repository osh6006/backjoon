// 다시 안 풀어도 됨.
function solution(a, b) {
    return a.reduce((prev,curr,i)=>{
        return prev += curr*b[i];
    },0)
}