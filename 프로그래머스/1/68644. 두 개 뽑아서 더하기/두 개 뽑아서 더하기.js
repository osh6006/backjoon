function solution(numbers) {
    let temp = [];
    var answer = [];
    
    for(let i=0;i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            answer.push(numbers[i]+numbers[j])
            console.log(i,j)
        }
    }
    return [...new Set(answer.sort((a,b)=>a-b))];
}