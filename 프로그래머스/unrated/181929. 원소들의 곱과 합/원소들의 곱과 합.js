function solution(num_list) {
    const allMulti = num_list.reduce((prev, curr)=>{
        return prev *=curr
    }, 1);
    const allSum = num_list.reduce((prev, curr)=>prev+=curr,0) **2;
    
    if(allMulti > allSum){
        return 0;
    }else{
        return 1;
    }
}
