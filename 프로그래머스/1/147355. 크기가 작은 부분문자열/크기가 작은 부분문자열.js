// 다시 안풀어도 됨
function solution(t, p) {
    const temp = [];
    let answer = 0;
    
    t.split("").forEach((el,i)=>{
        const substr = t.substring(i, i+p.length);
        if(substr.length === p.length && +substr <= +p){
            answer++;
        }
    });
    
    return answer;
}

