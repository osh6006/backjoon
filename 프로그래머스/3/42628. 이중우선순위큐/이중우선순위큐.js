function solution(operations) {
    const answer = [];
    const heap = new Heap();
    
    operations.forEach((el)=>{
        const [comment, number] = el.split(" ");
        
        if(comment === "I"){
            heap.push(Number(number));
        }else{
            if(number === "1"){
                heap.pop();
            }else{
                heap.minPop();
            }
        }
    });
    
    if(heap.heap.length === 1){
        return [0,0];
    }
    
    answer.push(heap.pop());
    answer.push(heap.minPop());
    
    return answer;
}

class Heap {
    constructor(){
        this.heap = [null];
    }
    
    swap(a,b){
        const temp = this.heap[a];
        this.heap[a] = this.heap[b];
        this.heap[b] = temp;
    }
    
    push(value){
        this.heap.push(value);
        
        let current = this.heap.length-1;
        let parent = Math.floor(current/2);
        
        while(parent!==0 && this.heap[parent] < value){
            this.swap(parent, current);
            current = parent;
            parent = Math.floor(current/2);
        }
    }
    
    pop(){
        if(this.heap.length === 1) return null;
        if(this.heap.length === 2) return this.heap.pop();
        
        const returnValue = this.heap[1];
        this.heap[1] = this.heap.pop();
        
        let current = 1;
        let left = 2;
        let right = 3;
        
        while(
            this.heap[current] < this.heap[left] ||
            this.heap[current] < this.heap[right]
        ){
            if(this.heap[left] < this.heap[right]){
                this.swap(right, current);
                current = right;
            }else{
                this.swap(left, current);
                current = left;
            }
            
            left = current*2;
            right = current * 2 + 1;
        }
        return returnValue;
    }
    
    minPop(){
        const newArray = [...this.heap];
        newArray.shift();
        const minValue = Math.min(...newArray);
        const temp = this.heap.filter((el)=>el !== minValue);
        this.heap = temp;
        return minValue;
    }
}