function solution(binomial) {
    const [num1, op, num2] = binomial.split(" ");
    return calculator(+num1, op, +num2);
    
}

function calculator(num1, op, num2){
    switch(op){
        case '+':
            return num1+num2;
        case '-':
            return num1-num2;
        case '*':
            return num1*num2;
    }
}