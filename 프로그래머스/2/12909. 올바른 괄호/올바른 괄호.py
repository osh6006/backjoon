def solution(s):
    answer = True
    stack = []
    
    for i, el in enumerate(s):
        if i == 0 and el == ")": return False
        
        
        if el ==")":
            for item in range(len(stack)):
                temp = stack.pop()
                if temp == "(":
                    break;
                else :
                    stack.append(temp)
        else :
            stack.append(el)
    

    answer = False if len(stack) else True
    
    
    return answer
    
    
    