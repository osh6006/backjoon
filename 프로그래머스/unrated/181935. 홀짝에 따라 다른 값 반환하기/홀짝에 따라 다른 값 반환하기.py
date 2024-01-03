def solution(n):
    if(n % 2 == 0):
        return cal_even(n)
    else:
        return cal_odd(n)
    
def cal_odd(n):
    result = 0;
    for i in range(1,n+1):
        if(i%2 != 0):
            result += i
    return result;
        
def cal_even(n):
    result = 0;
    for i in range(1,n+1):
        if(i%2 == 0):
            result += pow(i,2)
    return result;
    