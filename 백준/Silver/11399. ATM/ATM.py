import sys
input = sys.stdin.readline

n = int(input())

test = list(map(int, input().split()))
test.sort()

answer = []
temp = 0
for i in range(len(test)):
    temp += test[i]
    answer.append(temp)

print(sum(answer))