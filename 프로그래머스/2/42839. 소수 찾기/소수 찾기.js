function isPrime(number){
    if(number < 2){
        return false;
    }
    
    for(let i =2; i<=Math.sqrt(number); i++){
        if(number % i === 0) return false;
    }
    
    return true;
}

function dfs(set, arr, fixed){
    if(arr.length >= 1){
        for(let i = 0; i<arr.length; i++){
            let newFixed = fixed + arr[i];
            let arrcpy = [...arr];
            arrcpy.splice(i, 1);
            
            if(isPrime(Number(newFixed))) set.add(Number(newFixed));
            
            dfs(set, arrcpy, newFixed);
        }
    }
}

function solution(numbers) {
    const arr = numbers.split('');
    const set = new Set();
    
    dfs(set, arr , '');
    return set.size;
}