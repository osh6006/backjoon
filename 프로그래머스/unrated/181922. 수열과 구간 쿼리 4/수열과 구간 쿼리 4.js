function solution(arr, queries) {
    queries.forEach((el)=>{
        const s = el[0];
        const e = el[1];
        const k = el[2];
        
        for(let i = 0; i<arr.length; i++){
            if(s<=i && i<=e){
                if(i % k === 0) arr[i]++;
            }
        }
    });
    
    return arr;
}