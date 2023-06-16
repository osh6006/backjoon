function solution(n) {
    let temp = n;
    const answer = [temp];
    while(temp !== 1){
        if(temp % 2 === 0){
            temp = Math.floor(temp/2);
        }else{
            temp = 3 * temp + 1;
        }
        answer.push(temp);
    }
    
    return answer;
}