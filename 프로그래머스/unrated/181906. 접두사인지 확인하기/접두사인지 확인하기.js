function solution(my_string, is_prefix) {
    let answer = 0;
    let temp = ""
    for(let i=0;i<my_string.length; i++){
        temp+=my_string[i];
        if(temp === is_prefix) answer = 1;
    }
    
    return answer;
}