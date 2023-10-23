// 다시 안풀어도 됨.
function solution(s) {
    if(s.length % 2 === 0){
        const temp = s.length /2;
        return s[temp-1]+s[temp];
    }else{
        const temp = Math.ceil(s.length /2);
        return s[temp-1];
    }
}