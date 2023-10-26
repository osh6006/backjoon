function solution(s) {
    const numObj = {
       zero:0, 
       one:1, 
       two:2, 
       three:3, 
       four:4,
       five:5, 
       six:6, 
       seven:7, 
       eight:8, 
       nine:9, 
    }
    
    const splitArr = s.split("");
    let temp = "";
    let answer = "";
    
    while(splitArr.length){
        if(Number.isInteger(numObj[temp])){
            answer+=numObj[temp];
            temp="";
        }
        
        const word = splitArr.shift();
        
        if(Number.isInteger(+word)){
            answer+=word;
            continue;
        }
        temp += word;
    }
    
    if(Number.isInteger(numObj[temp])){
        answer+=numObj[temp];
    }
    
    return +answer;
}