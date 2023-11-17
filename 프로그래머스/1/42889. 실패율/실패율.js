// 카카오 문제니까 풀어보기
function solution(N, stages) {
    const answer = [];
    let count = stages.length;
    for(let i = 1; i<=N; i++){
      const notClearPerson = stages.filter(el=>el===i).length;
        answer.push({
            stage:i,
            fail:notClearPerson/count,
        });
        count -= notClearPerson;
    }
    
   return answer.sort((a,b)=>b.fail - a.fail).map(el=>el.stage);
}