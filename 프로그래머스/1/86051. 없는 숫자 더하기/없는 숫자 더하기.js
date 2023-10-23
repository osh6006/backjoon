// 다시 안풀어도 됨.
function solution(numbers) {
    const temp = [1,2,3,4,5,6,7,8,9,0];
    return temp.filter(el=>!numbers.includes(el)).reduce((prev,curr)=>prev+=curr,0);
}