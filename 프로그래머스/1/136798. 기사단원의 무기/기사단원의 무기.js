function solution(number, limit, power) {
    let answer = 0;
    for(let i = 1; i<=number; i++){
        const countPower = countOfPower(i);
        if(countPower> limit){
            answer+=power;
        }else{
            answer+= countPower;
        }
    }
    
    return answer;
}

function countOfPower(power){
    let count = 0;
    for(let i = 1; i <= Math.sqrt(power); i++) {
        if(power%i===0){  
            count++;
            // 
            if(power/i !== i){
             count++;
            }
        }
    }
    
    return count;
}