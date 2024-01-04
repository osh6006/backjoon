def solution(x):
    hashadNum = sum([int(i) for i in str(x) ])
    if(x % hashadNum == 0):
        return True
    else:
        return False