def solution(n):
    answer = [int(i) for i in str(n) ]
    answer.sort(reverse=True)
    test = ''.join(map(str, answer))
    return int(test)
   