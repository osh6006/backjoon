
function solution(n) {
    const temp = n;
    let answer = 0;
    while(n>0){
        if(temp % n === 1) answer = n;
        n--;
    }
    
    return answer;
}