function solution(str_list) {
    let idx;
    let flag;
    let answer;
    let isEmpty = false;
    
    for(let i = 0; i<str_list.length; i++){
        if(str_list[i] === "l"){
            idx = i;
            flag = "left";
            break;
        }
        if(str_list[i] === "r"){
            idx = i;
            flag = "right";
            break;
        }
    }
    
    if(!flag){
        return [];
    }
    
    if(flag === "left"){
        answer = str_list.slice(0, idx);
    } 
    else{
        answer = str_list.slice(idx+1, str_list.length);
    }
    
    
    return answer;

}