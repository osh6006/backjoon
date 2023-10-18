function solution(n){
    return n.toString().split("").map(Number).reduce((prev,curr)=> prev+=curr,0)
}
