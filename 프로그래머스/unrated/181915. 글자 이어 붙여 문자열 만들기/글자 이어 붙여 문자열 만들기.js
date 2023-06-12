function solution(my_string, index_list) {
    const answer = [];
    index_list.forEach((el)=>{
        answer.push(my_string[el]);
    })
    
    return answer.join("");
}