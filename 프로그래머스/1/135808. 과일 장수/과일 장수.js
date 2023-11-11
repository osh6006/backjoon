function solution(k, m, score) {
    let answer = 0;
    let count = 1;
    score.sort((a,b)=>b-a);
    
    
    for(let i = 0; i<score.length; i+=m){
        const temp = score.slice(i,i+m);
        if(temp.length < m) break;
        
        const min = Math.min(...temp);
        answer += min * m;
    }
    
    return answer;
    
    
    
}
