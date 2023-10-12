function solution(citations) {
    var answer = 0;
    citations.sort((a,b)=> b-a);
    citations.forEach((el,i)=>{
        if(el>=i+1){
            answer = i+1;
        }
    });
    return answer;
}