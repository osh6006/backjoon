function solution(x) {
    const numSum = x.toString().split("").map(Number).reduce((prev,curr)=> prev+=curr);
    return x % numSum === 0 ? true : false; 
}