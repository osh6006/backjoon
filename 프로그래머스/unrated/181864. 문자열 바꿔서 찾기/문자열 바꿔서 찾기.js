function solution(myString, pat) {
    const answer = myString.split("").map((el)=>{
        if(el==="A") return el="B";
        if(el==="B") return el="A";
        return el;
    }).join("").includes(pat);
    
    if(answer) return 1;
    return 0;
}