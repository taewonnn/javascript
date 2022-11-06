// while(조건) {}

// 조건이 false가 될때까지 {} 코드를 반복 실행

let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}  // 5 4 3 2 1 0 0

let isActive = false;
let i = 0;
while (isActive) {
  console.log('아직살아있다!');
  if (i === 1000) {
    break;
  }
  i++;
}  // 조건 자체가 false라서 아예 실행을 안하게 됨


// do while  -> do 한 다음에 조건을 검사(조건이 안 맞더라도 한 번은 무조건 실행)
do {
  console.log('do-while 아직살아있다!');
} while (isActive);
