function solution(l, r) {
    const res = [];
    for(let i=l; i<=r; i++){
        let flag = true;
        for(let j=0; j<String(i).length; j++){
            if(String(i)[j] !== "0" && String(i)[j] !== "5"){
                flag = false;
                break;
            }
        }
        flag ? res.push(i) : null;          
    }
    return res.length === 0 ? [-1] : res;
}