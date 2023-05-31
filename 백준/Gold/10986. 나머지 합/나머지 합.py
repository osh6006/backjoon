import sys
import math

input = sys.stdin.readline
n, m = map(int, input().split())
A = list(map(int, input().split()))
S = [0] * n
C = [0] * m
answer = 0

S[0] = A[0]
for i in range(1, n):
    S[i] = S[i-1] + A[i]

for i in range(n):
    r = S[i] % m
    if r == 0:
        answer += 1
    C[r] += 1

for i in range(m):
    if C[i] > 1:
        answer += math.comb(C[i], 2)


print(answer)
