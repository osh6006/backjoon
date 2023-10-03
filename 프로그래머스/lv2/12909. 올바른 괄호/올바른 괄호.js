function solution(s){
    const lstack = [];
    const rstack = [];
    
    if(s[0]===")") return false;

    for(const el of s){
        if(el==="("){
            lstack.push(el);
        }else{
            if(lstack[lstack.length-1] === "("){
             lstack.pop();   
            }else{
             rstack.push(el);        
            }
        }
    }
    
    
    if(lstack.length === 0 &&  rstack.length === 0){
        return true
    }else{
        return false
    }
}