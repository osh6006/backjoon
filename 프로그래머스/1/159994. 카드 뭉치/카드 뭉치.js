function solution(cards1, cards2, goal) {
    var answer = "";
    const temp = [...goal];
    
    while(temp.length){
        if(cards1[0]===temp[0]){
            answer += cards1.shift();
        }else if(cards2[0] === temp[0]){
            answer += cards2.shift();
        } else{
            break;
        }
        temp.shift();
    }
    
    return answer === goal.join("") ? "Yes" : "No";
}