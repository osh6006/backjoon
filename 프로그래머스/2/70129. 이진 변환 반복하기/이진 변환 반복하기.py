def solution(s):
    answer = [0,0]
    
    while len(s) != 1:
        
#         모든 0을 제거하고 2진법으로 변환합니다.
        binary, zero_length = cal_zero_transition_binary(s)
        
        s = binary
        
        answer[1] += zero_length
        answer[0] +=1
    
    return answer

# 0의 개수와 2진수로 바꿔주는 함수
def cal_zero_transition_binary(s):
    zero_length = 0
    binary = ""
    
    for el in s:
        if(el == "0"): zero_length +=1
        else : binary += el
    
    binary = bin(len(binary))[2:]
    
    return binary, zero_length
