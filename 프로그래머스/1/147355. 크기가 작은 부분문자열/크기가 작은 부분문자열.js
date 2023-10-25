function solution(t, p) {
    const temp = [];
    
    t.split("").forEach((el,i)=>{
        const substr = t.substring(i, i+p.length);
        if(substr.length === p.length){
            temp.push(+substr);
        }
    });
    
    return temp.reduce((prev,curr)=>{
       if(curr <= +p ) prev++;
       return prev;
    },0)
}

