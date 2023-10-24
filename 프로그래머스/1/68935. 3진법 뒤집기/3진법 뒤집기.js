// 자바스크립트 N진법 변환 방법
function solution(n) {
    return parseInt(n.toString(3).split("").reverse().join(""), 3)
}
