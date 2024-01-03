from functools import reduce

def solution(n, control):
    directions = list(control)
    return reduce(control_cal, directions, n)

def control_cal(prev, word):
    if word == 'w':
        return prev+1
    elif word == 's':
        return prev-1
    elif word == 'd':
        return prev+10
    elif word == 'a':
        return prev-10