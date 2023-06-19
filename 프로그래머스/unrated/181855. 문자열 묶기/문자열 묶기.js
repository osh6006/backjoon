function solution(strArr) {
    const tempObj = {};
    strArr.forEach((el)=>{
        if(tempObj[el.length]){
            tempObj[el.length] += 1;
        }else{
            tempObj[el.length] = 1;
        }
    });
    
    
    const answer = Object.values(tempObj);
    
    return Math.max(...answer);
}