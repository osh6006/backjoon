function solution(arr, queries) {
    queries.forEach((el,i)=>{
        if(el[0] <= i || i <= el[1]){
            for(let j = el[0]; j<=el[1]; j++){
                arr[j] +=1;
            }
        }
    });
    
    return arr;
}