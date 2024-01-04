def solution(n):
   # 양의 정수 x의 제곱인지 확인
    x = int(n ** 0.5)
    
    if x * x == n:
        # 양의 정수 x의 제곱이라면 (x+1)의 제곱 반환
        return (x + 1) ** 2
    else:
        # 양의 정수 x의 제곱이 아니라면 -1 반환
        return -1