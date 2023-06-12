function solution(num_list) {
    let a = "";
    let b = "";
    
    num_list.forEach((el)=>{
        if(el % 2 === 0) a+=el;
        else b += el;
    });
    
    return +a + +b;
    
}