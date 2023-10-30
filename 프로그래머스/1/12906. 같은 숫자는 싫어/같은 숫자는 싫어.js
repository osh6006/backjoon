// 스택의 기본적인 문제 다시 풀어보기
function solution(arr){
    const stack = [];
    
    arr.forEach((el)=>{
        if(stack[stack.length-1] !== el){
            stack.push(el);
        }
    });
    
    return stack;
}