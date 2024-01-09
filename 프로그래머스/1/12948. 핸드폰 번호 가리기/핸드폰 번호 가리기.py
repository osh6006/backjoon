def solution(phone_number):
    change = phone_number[:-4]
    rest = phone_number[-4:]
    return ''.join(["*" for i in range(0, len(change))])+rest