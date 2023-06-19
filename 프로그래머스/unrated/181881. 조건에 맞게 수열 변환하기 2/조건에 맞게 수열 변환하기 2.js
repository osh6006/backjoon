function solution(arr) {
    let a = [...arr];
    let b = [];
    let count = 0;
    
    while(true){
        if(arrCompare(a , b)){
            break;
        }else{
            b = [...a];
            a = changeArr(a);
            count++;
        }
    }
    
    return count-1;
}

function changeArr(arr){
    return arr.map((el)=>{
        if(el>= 50 && el % 2 === 0){
            return el = Math.floor(el/2);
        }
        if(el < 50 && el % 2 !== 0){
            return el = el * 2 + 1;
        }
        return el;
    });
}

function arrCompare(arr1, arr2){
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}