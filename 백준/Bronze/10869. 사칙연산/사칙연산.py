import sys
#sys.stdin = open('test.txt', 'r')
input = list(map(int, sys.stdin.read().split(" ")))
print(input[0]+input[1])
print(input[0]-input[1])
print(input[0]*input[1])
print(input[0]//input[1])
print(input[0]%input[1])