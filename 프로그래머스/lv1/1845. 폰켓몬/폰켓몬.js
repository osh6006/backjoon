function solution(nums) {
    const hashMap = new Map();
    let answer = 0;
    
    for(el of nums){
        if(!hashMap.has(el)){
            hashMap.set(el,el);
            answer++;
        }
    }
    
    if(nums.length/2 < answer){
        return nums.length/2
    }else{
        return answer;
    }
    
    
    
    // set으로 풀기
    
    // if(nums.length/2 === [...new Set(nums)].length){
    //      return nums.length/2;
    // } else if(nums.length/2 < [...new Set(nums)].length){
    //      return nums.length/2;
    // } else {
    //      return [...new Set(nums)].length;
    // }
    
}