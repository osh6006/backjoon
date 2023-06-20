function solution(arr) {
    const start = arr.indexOf(2)
    const last = arr.lastIndexOf(2)
    return start+last< 1 ? [-1] : arr.slice(start, last+1)

}