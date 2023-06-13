function solution(arr1, arr2) {
    if(arr1.length < arr2.length) return -1
    if(arr1.length > arr2.length) return 1;
    
    const a = arr1.reduce((prev,curr)=> prev+=curr, 0);
    const b = arr2.reduce((prev,curr)=> prev+=curr, 0);
    
    if(arr1.length === arr2.length){
        if(a>b) return 1;
        if(a<b) return -1;
        if(a===b) return 0;
    }
}