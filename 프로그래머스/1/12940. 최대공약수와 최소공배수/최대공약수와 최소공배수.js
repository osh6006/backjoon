// 다시 풀어보기 유클리드 호제법 기억하기
function solution(n, m) {
    const gcd = getGcd(n,m);
    const lcm = getLcm(n,m, gcd);
    return [gcd, lcm];
}

function getLcm(a, b, gcd){
   return a * b / gcd
}

function getGcd(a,b){
    if(b === 0) return a;
    else return getGcd(b, a % b);
}