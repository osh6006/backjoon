function solution(n, m, section) {
    let count = 0;
    const wall = Array.from({length:n}, ()=>true);
    
    section.forEach((el)=>{
        wall[el] = false;
    });
    
    for(let i = 0; i<wall.length; i++){
        if(!wall[i]){
            for(let j = i; j<i+m; j++){
                wall[j] = true;
            }
            count++;
        }
    }
    
    return count;
}

