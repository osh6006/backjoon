function solution(arr, k) {
    const answer = [];
    const temp = [...new Set(arr)];
    
    for(let i = 0; i<k; i++){
        if(temp[i] || temp[i]=== 0 ){
            answer.push(temp[i]);
        }else{
            answer.push(-1);
        }
    }
    return answer;
}