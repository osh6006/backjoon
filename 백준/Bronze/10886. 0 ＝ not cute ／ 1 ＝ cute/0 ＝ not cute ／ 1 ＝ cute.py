n = int(input())
cute = 0
notCute = 0
for i in range(n):
    if (int(input()) == 1):
        cute += 1
    else:
        notCute += 1

if (cute > notCute):
    print("Junhee is cute!")
else:
    print("Junhee is not cute!")