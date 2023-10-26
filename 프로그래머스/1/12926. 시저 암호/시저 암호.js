// 

function solution(s, n) {
    const lowAlphabet = "abcdefghijklmnopqrstuvwxyz".split("")
    const upperAlphabet = lowAlphabet.map(el=>el.toUpperCase());

    
    let answer = "";
    
    s.split("").forEach(el=>{
        if(el !== " "){
            const arr = lowAlphabet.includes(el) ? lowAlphabet:upperAlphabet;
            let idx = arr.indexOf(el) + n;
            
            if(idx >= arr.length) idx-= arr.length; 
            answer+= arr[idx];
        }else{
            answer+= " ";
        }
    });
    
    return answer;
}