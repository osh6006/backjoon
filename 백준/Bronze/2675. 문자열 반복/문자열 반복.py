n = int(input())
for i in range(n):
    s_length, s = input().split(" ")
    answer = ""
    for el in s:
        answer += el*int(s_length)
    print(answer)
