function solution(arr, intervals) {
    const answer = [];
    intervals.forEach((el)=>{
        const temp = arr.slice(el[0], el[1]+1);
        answer.push(temp);
    })
    
    return answer.flat();
}