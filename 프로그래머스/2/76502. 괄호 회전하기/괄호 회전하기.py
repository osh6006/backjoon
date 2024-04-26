def solution(s):
    s_arr = list(s)
    answer = 0
    
    answer += check_right(s_arr)
    
    for el in range(len(s)-1):
        s_arr.append(s_arr.pop(0))
        answer += check_right(s_arr)
    
    return answer

def check_right(array):
    temp_stack = []
    
    for el in array:
        if(el == "(" or el =="[" or el=="{"):
            temp_stack.append(el)
        else:
#             만약 다른 문자 모두 없다면 
            if not temp_stack:
                return 0
            
            if el == ")" and temp_stack[-1] == "(":
                temp_stack.pop()
            elif el == "}" and temp_stack[-1] == "{":
                temp_stack.pop()
            elif el == "]" and temp_stack[-1] == "[":
                temp_stack.pop()
            else:
                return 0

    
    
    if temp_stack:
        return 0
    else:
        return 1
