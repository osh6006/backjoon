import sys
input = list(map(int, sys.stdin.read().split(" ")))

R1 = input[0]
S = input[1]
print(S*2-R1)
