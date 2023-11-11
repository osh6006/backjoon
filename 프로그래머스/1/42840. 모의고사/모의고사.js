function solution(answers) {
    const a = [1, 2, 3, 4, 5];
    const b = [2, 1, 2, 3, 2, 4, 2, 5];
    const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    const answer = [{idx:1,count:0},{idx:2,count:0},{idx:3,count:0}];
    
    answers.forEach((el,i)=>{
        if(el === a[i%a.length]){
            answer[0].count++;
        }
        if(el === b[i%b.length]){
            answer[1].count++;
            
        }
        if(el === c[i%c.length]){
            answer[2].count++;
        }
    });
    const max = answer.reduce((prev,curr)=>{
        if(prev<curr.count) prev = curr.count;
        return prev;
    },0);
    

    return answer.filter(el=>el.count!==0)
        .sort((a,b)=>a.count-b.count)
        .filter((el)=>max === el.count)
        .map(el=>el.idx);
}