// 다시 안풀어도 됨.
function solution(absolutes, signs) {
    return signs.reduce((prev,curr,idx)=>{
        if(curr){
            prev+= absolutes[idx];
        }else{
            prev += -absolutes[idx];
        }
            return prev;
    },0)
}