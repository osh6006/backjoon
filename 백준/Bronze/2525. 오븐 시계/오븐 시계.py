hour, minute = map(int, input().split())
additionalTime = int(input())


print(((minute + additionalTime) // 60 + hour) %
      24, (minute + additionalTime) % 60)