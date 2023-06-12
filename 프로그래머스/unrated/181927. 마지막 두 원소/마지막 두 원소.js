function solution(num_list) {
    const answer = [...num_list];
    const length = answer.length-1;
    
    if(answer[length] > answer[length-1]){
        const temp = answer[length]-answer[length-1]
        answer.push(temp)
    }else{
        const temp = answer[length]*2
        answer.push(temp)
    }
    
    return answer
}