def solution(n):
    pattern = "수박"
    result = (pattern * (n // 2)) + (pattern[:n % 2])
    return result