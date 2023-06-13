function solution(names) {
    let answer = [];
    names.forEach((el,i)=>{
        if(i % 5 === 0){
            answer.push(el);
        }
    })
    
    return answer;
}