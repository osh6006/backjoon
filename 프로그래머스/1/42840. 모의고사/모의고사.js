function solution(answers) {
    let temp = [
        {index:1,value:0},
        {index:2,value:0},
        {index:3,value:0},
    ]
    const no1 = [1,2,3,4,5];
    const no2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const no3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let index1=0;
    let index2=0;
    let index3=0;
    
    let count1=0;
    let count2=0;
    let count3=0;
    
   answers.forEach((el,i)=>{
        if(index1>no1.length-1) index1 = 0;
        if(index2>no2.length-1) index2 = 0;
        if(index3>no3.length-1) index3 = 0;
       
        if(no1[index1] === el){
            temp[0] = {index:1, value: temp[0].value + 1 }
        }
       
       if(no2[index2] === el){
            temp[1] = {index:2, value: temp[1].value+1 }
        }
       
       if(no3[index3] === el){
            temp[2] = {index:3, value: temp[2].value+1 }
        }
        
        index1++;
        index2++;
        index3++;
        
    });
    
    temp.sort((a,b) => b.value - a.value);
    const max = Math.max(...temp.map(obj => obj.value));
    return temp.filter((el)=>el.value === max).map(el=>el.index);
    
}