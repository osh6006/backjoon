function solution(my_string) {
    const answer = [];
    let buffer = "";
    for(let i = 0; i<my_string.length; i++){
        if(my_string[i] !== " "){

            buffer+=my_string[i]
        }else{
            if(buffer !== "") answer.push(buffer);
            buffer = "";
        }
    }
    if(buffer) answer.push(buffer);
    
    return answer;
}