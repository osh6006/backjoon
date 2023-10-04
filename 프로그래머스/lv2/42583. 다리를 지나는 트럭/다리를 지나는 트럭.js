function solution(bridge_length, weight, truck_weights) {
    let count = 0;
    let weightSum = 0;
    
    const bridge = Array.from({length:bridge_length}, ()=>0);
    const endBridge = [];
    
    bridge.shift();
    weightSum += truck_weights[0];
    bridge.push(truck_weights.shift());
    count++;
    
    while(weightSum > 0){        
        count++;
        
        weightSum -= bridge.shift();
        
        if(truck_weights.length > 0 && weightSum + truck_weights[0] <= weight){
            weightSum += truck_weights[0];
            bridge.push(truck_weights.shift());
        }else{
            bridge.push(0);
        }
    }
    
    return count;
    
}