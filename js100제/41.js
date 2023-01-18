//숫자가 주어지면 소수인지 아닌지 판별하는 프로그램을 작성해주세요.
// 소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
// (소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)

function distinction (num) {
  for (let i=2; i<num; i++) {
      const res = num % i;
      if(res === 0) {
        console.log('NO')
        return false;
      }
  }
  if(num === 1) {
    conosloe.log('No');
    return;
  }
  console.log('Yes')
  }


distinction(3)

