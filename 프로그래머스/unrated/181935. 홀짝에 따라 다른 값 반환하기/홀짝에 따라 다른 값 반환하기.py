def solution(n):
    # 홀수인 경우 1부터 n까지 2씩 늘어남 따라서 홀수
    if n % 2 == 1:  
        return sum(i for i in range(1, n + 1, 2))
    # 짝수인 경우 2부터 n까지 2씩 늘어남 따라서 짝수 
    else:  
        return sum(i**2 for i in range(2, n + 1, 2))
