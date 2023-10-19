// 다시 안 풀어도 됨 성능 개선을 하려면 아마 dp로풀어야 할듯?
function solution(a, b) {
    let answer = 0;
    
    if(a<b){
        for(let i = a; i<=b; i++){
            answer+=i;
        }
    }else{
        for(let i = b; i<=a; i++){
            answer+=i;
        }
    }
    
    return answer;
}