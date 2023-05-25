count = 0
for i in range(5):
    number = int(input())
    if number <= 40:
        count += 40
    else:
        count += number

print(int(count / 5))