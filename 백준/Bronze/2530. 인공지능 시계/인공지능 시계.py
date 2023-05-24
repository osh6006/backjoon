hour, minute, second = map(int, input().split())
additionalTime = int(input())

temp1 = (second + additionalTime) // 60
temp2 = (minute+temp1) // 60


print((hour+temp2) % 24, (minute+temp1) % 60, (second+additionalTime) % 60)