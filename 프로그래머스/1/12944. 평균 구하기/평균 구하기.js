// 안풀어도 됨.
function solution(arr) {
    return arr.reduce((prev,curr)=> prev+=curr)/arr.length;
}