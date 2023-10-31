// 다시 안풀어도 됨
function solution(strings,n){
    return strings.sort((a, b) => {
        const chr1 = a[n];
        const chr2 = b[n];

        if (chr1 == chr2) {
            return (a > b) - (a < b);
        } else {
            return (chr1 > chr2) - (chr1 < chr2);
        }
    })
}