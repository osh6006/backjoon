n = int(input())
votes = list(input())
A = votes.count("A")
B = votes.count("B")
if (A > B):
    print("A")
elif (A == B):
    print("Tie")
else:
    print("B")
