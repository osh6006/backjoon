function solution(numbers, n) {
    let answer = 0;
    numbers.forEach((el)=>{
        if(answer > n){
            return 0;
        }
        answer += el;
    })
    
    return answer;
}