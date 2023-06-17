function solution(my_string, indices) {
    let temp = my_string.split("");
    const answer = [];
    indices.forEach((el)=>{
        for(let i = 0; i<temp.length; i++){
            if(i === el){
                delete temp[i]
            }
        }
    })
    
    return temp.filter(el=>{
        if(el) return true;
    }).join("");
    
    
    
}