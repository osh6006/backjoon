function solution(q, r, code) {
    let answer = "";
    code.split("").forEach((el, i)=>{
        if(i%q === r) answer+= el;
    });
    return answer;
}