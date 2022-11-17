// callstack
// js 해석기가 사용하는 매커니즘  * 책에서 손가락으로 원하는 글자를 찾을 떄 손과 같은 것?!


function a() {
  // for (let i = 0; i < 1000000000000000; i++);
  return 1;
}

function b() {
  return a() + 1;
}

function c() {
  return b() + 1;
}

console.log('시작했다!');

const result = c();
console.log(result); // 3



// result = c()이니 c함수를 호출 -> c함수로 가니 b함수 호출 -> b함수로 가니 a함수 호출
// a:1 -> b : 1 + 1 = 2 -> c : 2 + 1 = 3

// 기본적으로 동기적(순차적)으로 실행됨
// js는 콜스택에 함수 호출을 추가하고
// 값이 변환될 때마다 삭제된다!


// a함수에 for문이 엄청 길다면... Result가 나오는데 너무 오래걸림!!
// 왜냐?? for문이 다 돈 다음에 Return을 했기에...
