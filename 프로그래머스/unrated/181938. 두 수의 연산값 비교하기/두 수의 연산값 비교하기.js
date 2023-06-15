function solution(a, b) {
    if(Number(a.toString()+b.toString()) > 2*a*b){
        return Number(a.toString()+b.toString());
    }else{
        return 2*a*b;
    }
}