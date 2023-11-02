function solution(food) {
    let answer = "0";
    for(let i = food.length-1; i>0; i--){
        const temp = Math.floor(food[i] / 2);
        const left = i.toString().repeat(temp);
        const right = left.split("").reverse().join("");
        answer = left+answer+right;
    }
    
    return answer;
}