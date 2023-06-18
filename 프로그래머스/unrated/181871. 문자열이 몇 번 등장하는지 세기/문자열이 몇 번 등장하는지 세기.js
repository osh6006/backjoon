function solution(myString, pat) {
    let temp = "";
    let answer = 0;
    
    myString.split("").forEach((el,i)=>{
        for(let k = i; k < i + pat.length; k++){
            if(myString[k]) temp += myString[k];
        }
        
        if(temp === pat){
            answer++;
        } 
        temp = "";
        
    })
    return answer;
}