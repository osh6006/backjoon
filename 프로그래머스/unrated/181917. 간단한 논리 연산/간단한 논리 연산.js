function solution(x1, x2, x3, x4) {
    let a = null
    let b = null;
    
    if(x1 === false && x2 === false) a = false;
    else a = true;
    
    if(x3 === false && x4 === false) b = false;
    else b = true;
    
    console.log(a, b)
    
    if(a === true && b === true){
        return true;
    }else{
        return false;
    }
}