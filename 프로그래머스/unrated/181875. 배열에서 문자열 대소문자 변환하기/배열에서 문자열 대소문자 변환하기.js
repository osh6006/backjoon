function solution(strArr) {
    return strArr.map((el,i)=>{
        if(i%2===0){
            return el.toLowerCase()
        }else{
            return el.toUpperCase()
        }
    })
}