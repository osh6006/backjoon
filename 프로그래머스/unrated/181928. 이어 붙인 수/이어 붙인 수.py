def solution(num_list):
    odd = ''.join([str(num) for num in num_list if num % 2 != 0])
    even = ''.join([str(num) for num in num_list if num % 2 == 0])
    
    return int(odd) + int(even)