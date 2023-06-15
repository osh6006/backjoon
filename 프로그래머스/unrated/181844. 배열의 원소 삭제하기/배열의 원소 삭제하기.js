function solution(arr, delete_list) {
    const answer = [];
    
    arr.forEach(el=>{
        if(!delete_list.includes(el)) answer.push(el);
    });
    
    return answer;
}