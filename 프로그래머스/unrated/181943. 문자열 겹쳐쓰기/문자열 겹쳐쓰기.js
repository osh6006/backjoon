function solution(my_string, overwrite_string, s) {
    let count = 0;
    const temp = my_string.substring(s,overwrite_string.length+s);
    
    return my_string.split("").map((el,i)=>{
        if(i>=s && i<overwrite_string.length+s){
         return overwrite_string[count++];
        }
        
        return el;
    }).join("");
}