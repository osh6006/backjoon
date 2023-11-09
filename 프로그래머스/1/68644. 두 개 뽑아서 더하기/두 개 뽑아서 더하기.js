// 서로 다른 두개의 수를 뽑아서 더하기
// 조합 
// 다시 풀어보기/
function solution(numbers) {
    const answer = combination(numbers,2).flat();
    return [...new Set(answer)].sort((a,b)=>a-b);
    
}

function combination(arr, n){
    if(n===1) return arr.map(el=>[el]);
    let result = [];
    
    arr.forEach((fixed, idx, arr)=>{
        const rest = arr.slice(idx+1);
        const comb = combination(rest, n-1);
        const combine = comb.map(el=>[fixed, ...el]).map(el=>el[0]+el[1]);
        result.push([...combine]);
    });
    
    return result;
}