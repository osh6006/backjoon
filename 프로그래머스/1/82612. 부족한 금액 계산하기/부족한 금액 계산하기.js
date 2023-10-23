function solution(price, money, count) {
    let temp = 0;
    while(count>0){
        temp += price * count;
        count--;
    }
    

    return temp > money ? temp - money : 0;
}