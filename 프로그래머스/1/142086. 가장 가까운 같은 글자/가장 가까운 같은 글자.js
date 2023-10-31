function solution(s) {
    var answer = [];
    const split = s.split("");
    const queue = [];
    split.forEach((el)=>{
        let idx = queue.indexOf(el);
        if(idx !== -1) idx++; 
        answer.push(idx);
        queue.unshift(el);
    });
    
    return answer;
}
