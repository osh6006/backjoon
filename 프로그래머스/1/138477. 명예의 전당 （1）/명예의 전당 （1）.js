// 큐와 뭐를 섞어야 하는듯
function solution(k, score) {
    const queue = [];
    const result = [];
    
    score.forEach((el)=>{
        if(queue.length<k){
            queue.push(el);
            queue.sort((a,b)=>b-a);
            result.push(queue[queue.length-1]);
        }else{
            const min = Math.min(...queue);
            if(min < el){
                queue.pop();
                queue.push(el);
                queue.sort((a,b)=>b-a);
                result.push(queue[queue.length-1]);
            }else{
                result.push(queue[queue.length-1]);
            }
        }
    })
    return result;
    
}