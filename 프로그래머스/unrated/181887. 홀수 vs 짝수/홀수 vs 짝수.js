function solution(num_list) {
    let solo = 0;
    let pair = 0;
    
    num_list.forEach((el, i)=>{
        if(i % 2 === 0) pair += el;
        else solo += el;
    });
    
    console.log(solo, pair)
    
    return Math.max(solo, pair);
}