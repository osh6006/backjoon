function solution(numLog) {
    let temp = numLog[0];
    let answer = "";
    for(let i = 0; i<numLog.length; i++){
        if(numLog[i] === temp+1){
            temp = temp+1;
            answer +="w";
        }
        if(numLog[i] === temp-1){
            temp = temp-1;
            answer +="s";
        }
        if(numLog[i] === temp+10){
            temp = temp+10;
            answer +="d";
        }
        if(numLog[i] === temp-10){
            temp = temp-10;
            answer +="a";
        }
    }
    
    return answer;
}

