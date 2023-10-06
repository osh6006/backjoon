class MinHeap {
	constructor() {
		this.heap = [null];
	}
    
    push(value){
        this.heap.push(value);
        let currentIdx = this.heap.length - 1;
        let parentIdx = Math.floor(currentIdx / 2);
        
        while(parentIdx !== 0 && this.heap[parentIdx] > value){
            const temp = this.heap[parentIdx];
            this.heap[parentIdx] = value;
            this.heap[currentIdx] = temp;
            currentIdx = parentIdx;
            parentIdx = Math.floor(currentIdx/2);
        }
    }
    
    pop(){
        if(this.heap.length === 2){
            return this.heap.pop();
        }
        const returnValue = this.heap[1];
        this.heap[1] = this.heap.pop();
        
        let currentIdx = 1;
        let leftIdx = 2;
        let rightIdx = 3;
        

        
        while(
            this.heap[currentIdx] > this.heap[leftIdx]  ||
            this.heap[currentIdx] > this.heap[rightIdx]
        ){
            if(this.heap[leftIdx] > this.heap[rightIdx]){
                const temp = this.heap[currentIdx];
                this.heap[currentIdx] = this.heap[rightIdx];
                this.heap[rightIdx] = temp;
                currentIdx = rightIdx;
            }else{
                const temp = this.heap[currentIdx];
                this.heap[currentIdx] = this.heap[leftIdx];
                this.heap[leftIdx] = temp;
                currentIdx = leftIdx;
            }
            
            leftIdx = currentIdx * 2;
            rightIdx = currentIdx * 2 + 1
        }
        
        return returnValue;
    }
    
    isScoville(value){
        return this.heap[1] >= value;
    }
}

function solution(scoville, K) {
    const heap = new MinHeap();
    let count = 0;
    
    scoville.forEach((el)=>{
        heap.push(el);
    });
    
    const length = heap.heap.length;
    
    
    while(!heap.isScoville(K)){
        if(count >= length-1) break;
        const firstLowSpicy = heap.pop();
        const secondLowSpicy = heap.pop();
        const mixScoville = firstLowSpicy + (secondLowSpicy * 2);
        heap.push(mixScoville);
        count++;
    }
    
    
    if(heap.heap.length <= 0 || heap.pop()<K){
        return -1;
    }
    
    
    return count;
    
}