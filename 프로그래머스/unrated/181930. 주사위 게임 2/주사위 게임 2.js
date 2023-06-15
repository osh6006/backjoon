function solution(a, b, c) {
    const arr = [a,b,c];
    const visited = {};
    
    arr.forEach((el)=>{
        if(visited[el]) visited[el] = visited[el] + 1; 
        else visited[el] = 1;
    });
    
    const visitedArr = Object.entries(visited);
    
    // 세 숫자가 모두 다르다면
    if(visitedArr.length === 3){
        return a + b + c;
    } 
    
    // 세 숫자 중 어느 두 숫자는 같고 나머지 다른 숫자는 다르다면
    if(visitedArr.length === 2){
        return (a + b + c) * (a**2 + b**2 + c**2);
    } 
    
    // 세 숫자가 모두 같다면
    if(visitedArr.length === 1){
        return (a+b+c) * (a**2 + b**2 + c**2) * (a**3 + b**3 + c**3);
    }

}