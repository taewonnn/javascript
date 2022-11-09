// 콜백함수
// 내가 나중에 호출해줄게!

// 일급객체(일급함수) - 일반 객체처럼 모든 연산이 가능한 것
// ex) 함수의 매개변수로 전달, 함수의 반환값, 할당 명령문, 동일 비교 대상
// object, function


// 고차함수 - 인자로 함수를 받거나(콜백함수) 함수를 반환하는 함수


// 콜백함수
// 더하는 함수
const add = (a, b) => a + b;
// 곱하는 함수
const multiply = (a, b) => a * b;

// 전달된 action은 콜백함수이다.
// 전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라,
// 함수를 가리키고 있는 함수의 레퍼런스(참조값)가 전달된다.
// 그래서 함수는 고차함수안에서 필요한 순간에 호출이 나중에 됨

function calculator(a, b, action) {
  if (a < 0 || b < 0) {
    return;
  }
  let result = action(a, b);
  console.log(result);
  return result;
}


// add, multiply를 호출하진 않았음! 함수를 가르키고 있는 주소만 전달함!
calculator(1, 1, add); 
calculator(1, 2, multiply);
