function solution(my_strings, parts) {
    let answer = "";
    
    my_strings.forEach((el, i)=>{
       answer += el.substring(parts[i][0], parts[i][1]+1);
    });
    
    return answer; 
}