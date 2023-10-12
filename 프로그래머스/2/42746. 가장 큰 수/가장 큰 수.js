function solution(numbers) {
    const answer = numbers.sort((a,b)=>{
        let count = 0
        const tempA = `${a}${b}`
        const tempB = `${b}${a}`

        if(+tempA > +tempB){
            return -1;
        }else{
            return 1;
        }
    }).join("");
    
    // answer가 "00" 인 경우를 방지
    if(answer[0] === "0") return "0";
    
    return answer;
}