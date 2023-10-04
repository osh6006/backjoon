function solution(progresses, speeds) {
    const queue = [];
    const answer = [];
    let temp = 0;
    let count = 1;
    
    for(let i = 0; i<progresses.length; i++){
        const endline = (100-progresses[i]) / speeds[i];
        queue.push(Math.ceil(endline));
    }
    
    temp = queue.shift();
    while(queue.length > 0){
        const end = queue.shift();
        if(end <= temp){
            count++;
        }else{
            answer.push(count);
            count = 1;
            temp = end;
        }
    }
    answer.push(count);
    
    
    return answer;
}