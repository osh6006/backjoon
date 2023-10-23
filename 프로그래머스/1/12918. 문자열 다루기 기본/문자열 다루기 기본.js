// 다시 안풀어도 됨.
function solution(s) {

    if(s.length === 4 || s.length === 6){
        let flag = false;
        s.split("").forEach(el=>{
            if(!Number.isInteger(+el)) flag = true;
        });
        
        if(!flag) return true;
        else return false;
    }else{
        false;
    }
    
    return false;
}