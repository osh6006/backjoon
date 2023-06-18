function solution(myString, pat) {
    let temp = "";
    const tempArr =  []
    
    for(let i = 0; i<myString.length; i++){
        temp += myString[i];
        if(temp.includes(pat)){
            tempArr.push(temp);
            
        }
    }
    
    const answer = tempArr.filter((el)=> el.substring(el.length-pat.length) === pat)
    .sort((a,b)=>b.length - a.length);
    
    return answer[0];
    
}