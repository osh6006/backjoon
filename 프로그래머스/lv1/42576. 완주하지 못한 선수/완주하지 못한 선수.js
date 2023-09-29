function solution(participant, completion) {
    
    let answer = "";
    const hashMap = new Map();
    
    participant.forEach((el,i)=>{
        if(hashMap.has(el)){
            hashMap.set(el, {name:el, count:hashMap.get(el).count+1})
        }else{
        hashMap.set(el, {name:el, count: 1});  
        }
    });
    
    
    completion.forEach((el,i)=>{
        if(hashMap.has(el)){
          hashMap.set(el, {name:el, count:hashMap.get(el).count-1})
        }
    })
    
    for(const [key, value] of hashMap){
        if(value.count >= 1){
            answer = value.name;
        }
    }
    
    return answer;
}