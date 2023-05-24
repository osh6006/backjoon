n = int(input())
result = 1
bigN = 0
answer = []
while True:
    if bigN >= n:
        break
    else:
        answer.append(result)

    result += 1
    bigN += result


print(max(answer))
