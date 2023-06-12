function solution(arr, n) {
    if(arr.length % 2 === 0){
        return arr.map((el,i)=>{
            if(i % 2 === 0) return el;
            else return el+=n;
            
        });
    }else{
        return arr.map((el,i)=>{
            if(i%2===0) return el+=n;
            else return el;
        });
    }
}