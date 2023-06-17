function solution(my_string, m, c) {
    let test = my_string.split("");
    let answer = "";
    const temp = [];
    
    while(test.length > 0){
        const tp = [];
        for(let j = 0; j<m; j++){
            tp.push(test.shift());
        }
        temp.push(tp)
    }

    for(let i = 0; i<temp.length; i++){
        for(let j = 0; j<temp[i].length; j++){
            if(j === c-1){
                answer += temp[i][j];
            }
        }
    }
    
    return answer;
}