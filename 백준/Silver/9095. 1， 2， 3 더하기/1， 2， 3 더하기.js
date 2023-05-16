//콘솔 입력 받는 변수
const input = [];

//memo[n] : 정수 n을 1, 2, 3의 합으로 나타내는 방법의 수
const memo = [...Array(11)];

const write = (num) => {
  memo[num] = memo[num - 1] + memo[num - 2] + memo[num - 3];
};

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', function (line) {
    input.push(line.trim());
  })
  .on('close', function () {
    //초기값 설정
    memo[1] = 1;
    memo[2] = 2;
    memo[3] = 4;

    for (let i = 4; i <= 10; i++) {
      //n이 11 미만이므로 10까지 방법의 수 저장
      write(i);
    }

    //테스트 케이스 총 수 입력 변수에서 제거
    input.splice(0, 1);
    //입력에 맞는 방법의 수 메모에서 출력
    input.forEach((numString) => {
      console.log(memo[Number(numString)]);
    });
  });