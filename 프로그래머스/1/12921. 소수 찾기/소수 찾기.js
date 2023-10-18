function solution(n) {
    const answer = Array.from({length:n+1}, ()=>true);
    answer[0] = false;
    answer[1] = false;
    
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(answer[i]){
            for(let j = i*i; j<=n; j+=i){
                answer[j] = false;
            }
        }
    }
    
    
    return answer.filter(el=>el===true).length
}