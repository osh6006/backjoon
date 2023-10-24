function solution(s) {
    return s.split(" ").map((el)=>{
        const temp = el.split("");
        return temp.map((item,i)=>{
            if(i===0) return item.toUpperCase();
            if(i%2===0){
                return item.toUpperCase();
            }
            return item.toLowerCase();
        }).join("");
    }).join(" ");
}