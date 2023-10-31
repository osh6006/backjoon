function solution(n, arr1, arr2) {
    const decodeArr1 = arr1.map(el=>el.toString(2));
    const decodeArr2 = arr2.map(el=>el.toString(2));
    
    const mergeArr = decodeArr1.map((_,i)=>{
        return getMergeArr(addZero(decodeArr1[i], n).split("") ,addZero(decodeArr2[i], n).split(""));
    });
    
    return mergeArr;
}
function addZero(str, num){
    const temp = str.split("");
    while(temp.length !== num){
        temp.unshift("0");
    }

    return temp.join("");
}

function getMergeArr(arr1, arr2){
    return arr1.map((el,i)=>{
        if(+el+ +arr2[i] === 2) return "#"
        if(+el+ +arr2[i] === 1) return "#"
        if(+el+ +arr2[i] === 0) return " "
    }).join("");
}