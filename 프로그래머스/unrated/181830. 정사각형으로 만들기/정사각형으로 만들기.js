function solution(arr) {
    const x = arr.length;
    const y = arr[0].length;
    console.log(x,y)
    
    // 행의 수가 더 많을 경우
    if(x>y){
        return arr.map((el,i)=>{
            for(let j = 0; j<x-y; j++){
                el.push(0);
            }
            return el;
        });
    }
    
    // 열의 수가 더 많을 경우
    if(x<y){
        const tempArr = Array.from({length:y}, ()=>0)
        for(let j = 0; j<y-x; j++){
            arr.push(tempArr);
        }
        return arr;
    }
    
    // 행과 열의 수가 똑같을 경우
    if(x===y){
        return arr;
    }
}