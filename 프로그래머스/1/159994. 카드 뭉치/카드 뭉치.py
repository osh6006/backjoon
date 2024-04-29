from collections import deque

def solution(cards1, cards2, goal):
    
    new_goal = deque(goal)
    card_queue1 = deque(cards1)
    card_queue2 = deque(cards2)
    
    
    while new_goal:
        
        if( card_queue1 and card_queue1[0] == new_goal[0]):
            card_queue1.popleft()
            new_goal.popleft()
        elif card_queue2 and card_queue2[0] == new_goal[0]:
            card_queue2.popleft()
            new_goal.popleft()
        else :
            break;
            
    if new_goal :
        return "No"
    else:
        return "Yes"
