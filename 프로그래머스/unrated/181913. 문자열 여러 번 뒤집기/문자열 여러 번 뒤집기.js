function solution(my_string, queries) {
    
    const answer = my_string.split("");
    queries.forEach((el)=>{
        const [a,b] = el;
        
        let temp = [];
        for(let i = a; i<=b; i++){
            temp.push(answer[i]);
            answer[i] = "";
        }
        
        let idx = 0;
        temp.reverse();
        
        for(let i = a; i<=b; i++){
            answer[i] = temp[idx];
            idx++;
        }
        
    
        
    });
    
    
    return answer.join("");
}