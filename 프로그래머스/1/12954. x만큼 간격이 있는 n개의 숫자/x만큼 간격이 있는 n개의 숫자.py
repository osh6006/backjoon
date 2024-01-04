def solution(x, n):
    # x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트 생성
    return [x * i for i in range(1, n + 1)]