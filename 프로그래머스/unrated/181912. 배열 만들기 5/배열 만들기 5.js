function solution(intStrs, k, s, l) {
    const answer = [];
    intStrs.forEach((el)=>{
        const newEl = Number(el.substring(s,s+l));
        if(newEl > k) answer.push(newEl);
    });
    
    return answer;

}