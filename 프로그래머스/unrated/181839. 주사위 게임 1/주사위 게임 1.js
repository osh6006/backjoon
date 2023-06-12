function solution(a, b) {
    if(!isPair(a) && !isPair(b)){
        return (a**2) + (b**2);
    }
    if( isPair(a) && isPair(b)){
        return Math.abs(a-b);
    }
    if(isPair(a) || isPair(b)){
        return 2 * (a+b);
    }

}

function isPair(num){
    if(num % 2=== 0) return true;
    return false;
}