function solution(ineq, eq, n, m) {
    if(eq === "="){
        if(ineq === ">" && n>=m){
            return 1;
        }else if(ineq === "<" && n<=m){
            return 1;
        }else{
            return 0;
        }
    }else{
        if(ineq === ">" && n>m){
            return 1;
        }else if(ineq === "<" && n<m){
            return 1;
        }else{
            return 0;
        }
    }
}