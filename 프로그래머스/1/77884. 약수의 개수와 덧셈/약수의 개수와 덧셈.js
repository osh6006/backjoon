// 다시 안풀어도 됨.
function solution(left, right) {
    var answer = 0;
    for(let i = left; i<=right; i++){
        let temp = 0;
        for(let j = 1; j<=i; j++){
            if(i % j === 0) temp++;
        }
        
        // console.log(temp)
        
        if(temp % 2 === 0) answer+= i;
        else answer -= i;
    }
    return answer;
}