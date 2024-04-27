def solution(s):
    stack = []
    
    for el in s:
        length = len(stack)
        if(not stack or stack[length-1] != el):
                stack.append(el)
        else:
            stack.pop()
            
    if(stack):
        return 0
    else:
        return 1
                
