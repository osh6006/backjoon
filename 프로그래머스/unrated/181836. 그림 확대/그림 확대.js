function solution(picture, k) {
    
    const answer = [];
    
    
    for(let i = 0; i<picture.length; i++){
        let pixel = picture[i].split("").map((el)=>{
            let temp = "";
            for(let j = 0; j<k; j++){
                temp += el;
            }
            
            return temp;
        }).join("");
        
        
        for(let j = 0; j<k; j++){
            answer.push(pixel);
        }
    }
    
    return answer;
}