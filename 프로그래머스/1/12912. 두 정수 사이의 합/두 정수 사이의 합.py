def solution(a, b):
    if a < b:
        return sum([i for i in range(a,b+1)])
    elif a > b :
        return sum([i for i in range(b ,a+1)])
    else:
        return b
        