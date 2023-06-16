function solution(a, d, included) {
    const temp = [a];
    let count = a;
    let answer = 0;
    
    for(let i=0;i<included.length-1; i++){
        count = count + d; 
        temp.push(count);
    }
    
    for(let i=0;i<included.length; i++){
        if(included[i]) answer += temp[i];
    }
    
    return answer;
}