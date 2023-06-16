function solution(arr, queries) {
    const answer = [...arr];
    queries.forEach((el,i)=>{
        const temp = answer[el[0]];
        answer[el[0]] = answer[el[1]];
        answer[el[1]] = temp;
    });
    
    return answer;
}