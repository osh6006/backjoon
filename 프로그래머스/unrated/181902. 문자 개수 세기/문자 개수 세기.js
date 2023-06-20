function solution(my_string) {
    const alphabet = {};
    for(let i = 65 ; i<=90; i++){
        alphabet[String.fromCharCode(i)] = 0;
    }
    for(let i = 65 ; i<=90; i++){
        alphabet[String.fromCharCode(i).toLowerCase()] = 0;
    }
    for(let i = 0; i<my_string.length; i++){
        alphabet[my_string[i]] += 1;
    }
    
    return Object.values(alphabet);
}