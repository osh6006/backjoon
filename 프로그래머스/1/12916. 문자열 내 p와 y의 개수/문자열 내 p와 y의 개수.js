function solution(s) {
    const string = s.split("");
    const p = string.filter(el=>el==="p" || el==="P").length;
    const y = string.filter(el=>el==="y" || el==="Y").length;
    
    if(p===0 && y===0) return true;
    return p === y ? true:false;
}