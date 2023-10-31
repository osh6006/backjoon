function solution(array, commands) {
    const answer = [];
    commands.forEach((el)=>{
        const [a,b,c] = el;
        const sortedArr = array.slice(a-1,b).sort((a,b)=>a-b);
        answer.push(sortedArr[c-1]);
    });
    
    return answer;
}