function solution(my_string, s, e) { 
   const answer = my_string.split("");
   const temp = my_string.substring(s,e+1).split("").reverse();
   
   let count = 0; 
   for(let i = s; i<=e; i++){
       answer[i] = temp[count];
       count++;
   } 

   return answer.join(""); 
}