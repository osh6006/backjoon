function solution(my_string, is_suffix) {
    
    for(let i = my_string.length; i>0; i-- ){
        if(my_string === is_suffix){
            return 1;    
        }
        my_string = my_string.slice(1);
    }
    
    return 0
}