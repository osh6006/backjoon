function solution(brown, yellow) {
    var answer = [];
    const sum = brown+yellow;
    
    for(let height = 3; height<=sum; height++){
        if(sum % height === 0){
            const width = sum/height;
            
            if((height-2) * (width-2) === yellow){
                answer.push(width);
                answer.push(height);
                return answer;
            }
        }
    }
    return answer;
}