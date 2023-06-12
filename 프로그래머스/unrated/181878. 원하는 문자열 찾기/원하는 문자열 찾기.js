function solution(myString, pat) {
    const a = myString.toLowerCase();
    const b = pat.toLowerCase();
    
    if(a.includes(b)){
        return 1;
    }
    return 0;
}