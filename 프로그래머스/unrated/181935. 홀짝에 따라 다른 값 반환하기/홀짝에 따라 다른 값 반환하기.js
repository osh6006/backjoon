function solution(n) {
    if(n%2 === 0){
        return getSum(n, "pair");
    }else{
        return getSum(n, "solo");
    }
}

function getSum(number, type){
    let sum = 0;
    if(type === "solo"){
        for(let i = 1; i<=number; i++){
            if(i % 2 !== 0) sum += i;
        }
    }else{
        for(let i = 1; i<=number; i++){
            if(i % 2 === 0) sum +=i ** 2;
        }
    }
    
    return sum;
}