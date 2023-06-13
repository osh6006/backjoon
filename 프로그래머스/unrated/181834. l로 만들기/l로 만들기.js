function solution(myString) {
    return myString.split("").map(el=>{
        if("l"> el) return "l";
        else return el;
    }).join("");
}