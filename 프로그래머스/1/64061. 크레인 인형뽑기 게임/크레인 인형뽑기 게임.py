def solution(board, moves):
#     [[0,0,0,0,0],
#      [0,0,1,0,3],
#      [0,2,5,0,1],
#      [4,2,4,4,2],
#      [3,5,1,3,1]]	
    
    answer = 0
    stack = [0]
    length = len(board)
    
    for move in moves :
        for i in range(length):
            if(board[i][move-1] != 0):
                if(board[i][move-1] == stack[-1]):
                    stack.pop();
                    answer += 2
                else:
                    stack.append(board[i][move-1])
                    
                board[i][move-1] = 0
                break
        
    return answer