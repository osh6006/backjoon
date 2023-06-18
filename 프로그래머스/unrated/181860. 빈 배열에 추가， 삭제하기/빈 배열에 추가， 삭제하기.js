function solution(arr, flag) {
    const answer = [];
    flag.forEach((el,i)=>{
        if(el){
            for(let k = 0; k < arr[i]*2; k++){
                answer.push(arr[i]);
            }
        }else{
            for(let k = 0; k<arr[i]; k++){
                answer.pop();
            }
        }
    })
    
    return answer;
}