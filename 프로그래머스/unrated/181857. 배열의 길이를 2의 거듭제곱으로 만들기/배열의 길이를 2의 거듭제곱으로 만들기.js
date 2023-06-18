function solution(arr) {
    const answer = [...arr];
    
    while(!isPowerOfTwo(answer.length)){
        answer.push(0);
    }
    
    return answer;
    
}

// 방법 1
function isPowerOfTwo(num) {
  return (num & (num - 1)) === 0;
}

// 방법 2
function isPowerOfTwo2(num) {
  return Math.log2(num) % 1 === 0;
}