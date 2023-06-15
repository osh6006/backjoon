function solution(myString) {
    const answer = [];
    
    myString.split("x").forEach((el)=>{
        answer.push(el.length);
    })
    
    return answer;
}