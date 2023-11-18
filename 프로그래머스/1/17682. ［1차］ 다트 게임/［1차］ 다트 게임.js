// 카카오 문제니까 풀어보기

// 스타상 *2 아차상 -점수
// S D T
function solution(dartResult) {
    const stack = [];
    
    dartResult.split("").forEach((el)=>{
        if(el === "S"){
            const temp = stack[stack.length-1];
            temp.code = el;
        }
        if(el === "D"){
            const temp= stack[stack.length-1];
            temp.code = el;
            temp.value = Math.pow(temp.value, 2);
        }
        if(el === "T"){
            const temp= stack[stack.length-1];
            temp.code = el;
            temp.value = Math.pow(temp.value, 3);
        }
        if(el === "*"){
            const now= stack[stack.length-1];
            const before = stack[stack.length-2];
            if(stack.length <2){
                now.value = now.value * 2;
            }else{
                now.value = now.value * 2;
                before.value = before.value * 2;
            }
        }
        if(el === "#"){
            stack[stack.length-1].value = stack[stack.length-1].value * -1;
        }
        if(Number(el) || el==="0"){
            let temp = stack[stack.length-1];
            if(temp?.code === "not" && temp?.value === 1 && el==="0"){
                temp.value = 10;
            }else{
                stack.push({
                    code:"not",
                    value: +el,
                })
            }

        }
    });
    
    
    return stack.reduce((prev,curr)=> prev +=curr.value, 0);
}

