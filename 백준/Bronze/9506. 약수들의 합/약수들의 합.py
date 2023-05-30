while True :
    n = int(input())
    if n == -1 : break
    temp = 1
    answer = []
    while temp < n:
        if n % temp == 0:
            answer.append(temp)
        temp += 1
    total = sum(answer)
    
    if total == n:
        print(f"{n} = {' + '.join(map(str, answer))}")
    else:
        print(f"{n} is NOT perfect.")