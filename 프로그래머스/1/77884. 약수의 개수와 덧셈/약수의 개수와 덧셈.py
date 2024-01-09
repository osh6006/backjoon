def solution(left, right):
    return sum([i if cal_measure(i) else -i for i in range(left, right+1)])
    
def cal_measure(n):
    measure_num = len([i for i in range(1, n + 1) if n % i == 0])
    return True if measure_num % 2 == 0 else False