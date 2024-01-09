def solution(numbers):
    standard = set(range(10))
    return sum(standard - set(numbers))