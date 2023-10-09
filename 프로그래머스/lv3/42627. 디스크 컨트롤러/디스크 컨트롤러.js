class MinHeap{
    constructor(){
        this.heap = [null];
    }

    push(value){
        this.heap.push(value);

        let currentIndex = this.heap.length -1;
        let parentIndex = Math.floor(currentIndex / 2);



        while(parentIndex !== 0 && this.heap[parentIndex]?.length > value.length){
            const temp = this.heap[parentIndex];
            this.heap[parentIndex] = value;
            this.heap[currentIndex] = temp;

            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2);
        }
    }

    pop(){
        if(this.heap.length === 2) return this.heap.pop();
        const returnValue = this.heap[1];
        this.heap[1] = this.heap.pop();

        let currentIndex = 1;
        let leftIndex = 2;
        let rightIndex = 3;

        while(this.heap[currentIndex]?.length > this.heap[leftIndex]?.length ||
              this.heap[currentIndex]?.length > this.heap[rightIndex]?.length
             ){

            if(this.heap[leftIndex]?.length > this.heap[rightIndex]?.length){
                const temp = this.heap[rightIndex];
                this.heap[rightIndex] = this.heap[currentIndex];
                this.heap[currentIndex] = temp;
                currentIndex = rightIndex;
            }else{
                const temp = this.heap[leftIndex];
                this.heap[leftIndex] = this.heap[currentIndex];
                this.heap[currentIndex] = temp;
                currentIndex = leftIndex;                
            }

            leftIndex = currentIndex * 2;
            rightIndex = currentIndex * 2 + 1;
        }

        return returnValue;
    }
}

function solution(jobs) {
    const heap = new MinHeap();

    jobs.sort((a, b) =>
    a[0] - b[0]
    );

    let count = 0;
    let answer = [];
    let complete = 0;



   while(jobs.length || heap.heap.length - 1) {

    while(jobs.length) {
      if(jobs[0][0] === count) {
        const finish = jobs.shift();
        heap.push({time:finish[0], length:finish[1]});
      } else break;
    }

    if(heap.heap.length - 1 && count >= complete) {
      const task = heap.pop();
      complete = task.length + count;
      answer.push(complete - task.time);
    }
    count++;
  }

  return Math.floor(answer.reduce((prev, curr)=>prev += curr) / answer.length); 

}