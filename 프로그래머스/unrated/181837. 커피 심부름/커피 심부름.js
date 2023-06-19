// 아메리카노 4500 라떼 5000
// 메뉴만 => 차가운 메뉴
// 아무거나 => 차가운 아메리카노

function solution(order) {
    const oderObj = {
        "iceamericano" : 4500,
        "americanoice" : 4500,
        "hotamericano" : 4500,
        "americanohot" : 4500,
        "icecafelatte" : 5000,
        "cafelatteice" : 5000,
        "hotcafelatte" : 5000,
        "cafelattehot" : 5000,
        "americano": 4500,
        "cafelatte": 5000,
        "anything" : 4500,
    }
    let answer = 0;
    
    order.forEach((el)=>{
        answer += oderObj[el];
    });
    
    return answer;
    
}