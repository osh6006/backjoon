def solution(arr, divisor):
    filtered_Arr = [i for i in arr if i%divisor==0];
    return [-1] if len(filtered_Arr) <= 0 else sorted(filtered_Arr)