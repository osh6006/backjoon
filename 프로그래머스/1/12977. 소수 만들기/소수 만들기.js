// 무조건 풀어봐야 하는 문제
// 조합, 소수를 판별하는 함수를 구현할 수 있어야 함

function solution(nums) {
    let answer = 0;
    const combination = getCombination(nums, 3);
    combination.forEach((el)=>{
        const addArrResult = el.reduce((prev,curr)=>prev+=curr,0);
        if(isPrime(addArrResult)){
            answer++;
        }
    });
    
    return answer;
}

// 소수 판별 함수
function isPrime(number){
    if(number < 2) return false;
    for(let i = 2; i<=Math.sqrt(number); i++ ){
        if(number % i === 0){
          return false;
        }
    }
    
    return true;
}

// 조합을 나타내는 함수
function getCombination(arr, n){
    if(n===1) return arr.map(v=>[v]);
    let result = [];
    
    arr.forEach((fixed, idx, arr)=>{
        const rest = arr.slice(idx+1);
        const comb = getCombination(rest, n-1);
        const combine = comb.map(el=>[fixed, ...el]);
        
        result.push(...combine);
    })
    return result;
}

