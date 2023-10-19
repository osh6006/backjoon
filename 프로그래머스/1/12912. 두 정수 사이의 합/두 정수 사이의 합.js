function solution(a, b) {
    const answer = []
    if(a<b){
        for(let i = a; i<=b; i++){
            answer.push(i);
        }
    }else{
        for(let i = b; i<=a; i++){
            answer.push(i);
        }
    }
    
    return answer.reduce((prev,curr)=> prev+=curr);
}