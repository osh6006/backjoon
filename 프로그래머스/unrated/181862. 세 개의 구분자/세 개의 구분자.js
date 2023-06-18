function solution(myStr) {
    const op = "abc";
    let answer = [];
    let temp = "";
    
    for(let i = 0; i<myStr.length; i++){
        if(op.includes(myStr[i])){
            answer.push(temp);
            temp = "";
        }else{
            temp += myStr[i];
        }
    }
    
    answer.push(temp);
    answer = answer.filter(el=>el!=="");
    
    if(answer.length>0){
        return answer;
    }else{
        return ["EMPTY"];
    }
    
    
}