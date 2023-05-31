import sys
input = sys.stdin.readline

n = int(input())
stack = []

for i in range(n):
    stack.append(int(input()))

stack.reverse()
answer = 0
tempStack = [0]

for i in range(0, n):
    if stack[i] > tempStack[-1]:
        tempStack.pop()
        tempStack.append(stack[i])
        answer += 1

print(answer)