import sys
input = sys.stdin.readline

card = {
    "STRAWBERRY": 0,
    "BANANA": 0,
    "LIME": 0,
    "PLUM": 0,
}

n = int(input())

for i in range(n):
    fruit, count = input().split()
    card[fruit] += int(count)

flag = False

for value in card.values():
    if value == 5:
        flag = True

if flag:
    print("YES")
else :
    print("NO")