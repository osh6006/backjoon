function solution(n) {
    const answer = Array.from({ length: n }, () => Array.from({ length: n }, ()=>0));
    let count = 0;
    for(let i = 0; i<n; i++){
        answer[i][count] = 1;
        count++;
    }
    
    return answer;
}