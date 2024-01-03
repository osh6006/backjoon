def solution(num_list):
    allMulti = 1

    for num in num_list:
        allMulti *= num

    allSumPow = pow(sum(num_list),2) 
    
    return 0 if allMulti>allSumPow else 1