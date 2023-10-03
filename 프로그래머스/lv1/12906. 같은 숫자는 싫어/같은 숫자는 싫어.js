function solution(arr){
   
   // 스택으로 풀기
   // 스택에 제일 위에 있는 값이 같은 숫자이면 삽입하지 않는다.
   const stack = [];
   
   for(let i = 0; i<arr.length; i++){
       if(stack[stack.length-1] !== arr[i]){
           stack.push(arr[i]);
       }
   }
    
   return stack;
    
   // 스택과는 다른 방법으로 풀기
   // return arr.filter((data,i)=>arr[i] !== arr[i+1])
}