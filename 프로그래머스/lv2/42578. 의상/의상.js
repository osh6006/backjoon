function solution(clothes) {
    let answer = 1;
    const hashMap = new Map();

    clothes.forEach(item => {
        const [cloth, type] = item;
        if (!hashMap.has(type)) {
            hashMap.set(type, 1);
        } else {
            hashMap.set(type, hashMap.get(type)+1);
        }
    })
    
    // 각 종류의 의상 개수를 곱해준다 착용을 안하는 경우도 있기 때문에 +1을 해준다.
    // 조합이므로 모든 경우의 수를 곱한다.
    for (const [key, value] of hashMap) {
        answer *= (value + 1)
    }

    // 아무것도 착용하지 않는 경우는 없으므로, -1을 해준다
    return (answer - 1);   
}