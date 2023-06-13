function solution(my_string) {
    const answer = [];
    for(let i = my_string.length-1; i>=0; i--){
        answer.push(my_string);
        my_string = my_string.slice(1);
    }
    
    return answer.sort();
}