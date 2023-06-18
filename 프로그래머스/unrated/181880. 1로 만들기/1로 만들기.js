function solution(num_list) {
    let count = 0;
    num_list.forEach((el)=>{
        let temp = el;
        while(temp !== 1){
            if(temp % 2 === 0){
                temp = Math.floor(temp / 2);
            }else{
                temp = temp-1;
                temp = Math.floor(temp / 2)
            }
            count++;
        }
    })
    
    return count;
}