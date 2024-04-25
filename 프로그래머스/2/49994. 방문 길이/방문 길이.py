def solution(dirs):
    x,y = 0,0
    answer = set()
    
    for dir in dirs:
        nx, ny = updated_location(x,y,dir)
        if not is_valid_move(nx,ny):
            continue
        
        answer.add((x,y,nx,ny))
        answer.add((nx,ny,x,y))
        
        x,y = nx,ny
        
    return len(answer) / 2

def is_valid_move(x,y):
    return -5 <= x <= 5 and -5 <=  y <= 5

def updated_location(x,y,dir):
    if dir == "U":
        nx,ny = x, y+1
    elif dir == "D":
        nx,ny = x, y-1
    elif dir == "L":
        nx,ny = x-1, y
    elif dir == "R":
        nx,ny = x+1, y
    
    return nx,ny

