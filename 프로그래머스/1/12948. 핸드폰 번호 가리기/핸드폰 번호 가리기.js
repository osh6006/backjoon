// 
function solution(phone_number) {
    const temp = phone_number.substring(phone_number.length-4, phone_number.length);
    let answer = ""
    for(let i = 0; i<phone_number.length-4; i++){
        answer+="*";
    }
    
    return answer+temp;
}