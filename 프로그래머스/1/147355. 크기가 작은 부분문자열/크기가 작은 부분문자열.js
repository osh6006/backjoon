function solution(t, p) {
    var answer = chunkSubstr(t, p.length);
    return answer.filter(el=>el<=p).length;
}

// 사이즈만큼 문자열을 잘라서 숫자 배열로 반환
function chunkSubstr(str, size) {
  const arr = [];

  for (let i = 0; i < str.length; i++) {
      let temp = "";
    for(let j = 0; j<size; j++){
        if(i+j >=str.length) break;
        temp+= str[i+j];
    }
    if(temp.length=== size)
        arr.push(+temp);
  }
  return arr;
}
