def solution(s):
    a = s.count("p") + s.count("P")
    b = s.count("y") + s.count("Y")
    
    if(a == b):
        return True
    elif (a == 0 and b == 0):
        return True
    else:
        return False
