function solution(rny_string) {
    if(rny_string.includes("m")){
        return rny_string.replaceAll("m", 'rn');
    }
    return rny_string;
}