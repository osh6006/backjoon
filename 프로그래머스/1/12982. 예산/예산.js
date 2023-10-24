function solution(d, budget) {
    const sortedD = d.sort((a,b)=>b-a);
    let answer = 0;
    let temp = 0
    while(budget >= sortedD[sortedD.length-1]){
        budget -= sortedD.pop();
        answer++;
    }
    
    return answer;
}