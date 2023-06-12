function solution(num_list) {
    let answer = null;
    
    for(let i=0;i<num_list.length; i++){
        if(num_list[i]<0){
            answer = i;
            break;
        }
    }
    
    if(!answer && answer !==0) answer = -1
    
    return answer;
}