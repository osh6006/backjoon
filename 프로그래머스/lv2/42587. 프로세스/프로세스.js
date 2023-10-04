

function solution(priorities, location){
    const choice = priorities[location];
    const queue = priorities.map((el,i)=>{
        return {idx:i, priority:el};
    });
    let count = 0;

    while(true){
        const max = Math.max(...queue.map((item) => item.priority));
        const check = queue.shift();
        
        if(check.priority === max){
            if(check.idx === location){
                count++;
                break;
            }
            count++;
        }else{
            queue.push(check);
        }
    }
    
    return count;
}