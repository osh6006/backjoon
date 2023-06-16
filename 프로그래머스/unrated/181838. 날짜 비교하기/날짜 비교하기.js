function solution(date1, date2) {
    const newDate1 = Number(date1.join(""));
    const newDate2 = Number(date2.join(""));
    
    
    if(newDate1 === newDate2 ){
        return 0;
    }
    
    if(newDate1 > newDate2){
        return 0;
    }
    
    return 1;
}