const isUpperCase = (word) => word === word.toUpperCase();

function solution(myString) {
    return myString.split("").map((el)=>{
        if(el==="a") return el = "A";
        else if(el!=="A" && isUpperCase(el)) return el = el.toLowerCase();
        else return el
    }).join("");
}