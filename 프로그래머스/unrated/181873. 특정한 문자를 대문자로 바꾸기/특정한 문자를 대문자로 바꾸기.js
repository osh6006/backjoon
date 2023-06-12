function solution(my_string, alp) {
    const answer = my_string.split("");
    for(let i = 0; i<answer.length; i++){
        if(answer[i]===alp){
            answer[i] = answer[i].toUpperCase();
        }
    }
    return answer.join("");
}