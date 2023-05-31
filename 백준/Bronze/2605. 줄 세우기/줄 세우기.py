import sys
input = sys.stdin.readline

n = int(input())

# 배열 선언 밑 앞부분 초기화
stack = [1]
test = list(map(int, input().split()))
test.pop(0)

for i in range(len(test)):
    if test[i] > 0:
        stack.insert(-test[i], i+2)
    else:
        stack.append(i+2)

answer = ""
for el in stack:
    answer += str(el) + " "

print(answer)