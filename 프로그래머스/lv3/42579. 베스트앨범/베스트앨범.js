function solution(genres, plays) {
    const hashMap = new Map();
    const answer = [];
    
    for(let i = 0; i<genres.length; i++){
        if(hashMap.has(genres[i])){
          const total = hashMap.get(genres[i]).total + plays[i];
          const info = hashMap.get(genres[i]).info;
          info.push({idx:i, play: plays[i]})
          hashMap.set(genres[i], {total, info})
        }else{
          const array = [];
          array.push({idx:i, play: plays[i]});
          hashMap.set(genres[i], {total:plays[i],info:array})
        }
    }
    
    [...hashMap.entries()].sort((a,b)=> b[1].total-a[1].total).forEach(item=>{
        const [genre, etc] = item;
        etc.info.sort((a,b)=>b.play-a.play);
        
        if(etc.info.length=== 1){
           answer.push(etc.info[0].idx); 
        }else{
           answer.push(etc.info[0].idx);
           answer.push(etc.info[1].idx);
        }
        
    });
    
    return answer;
}