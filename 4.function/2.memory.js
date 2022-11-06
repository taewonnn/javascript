function add(a, b) {
  return a + b;
}

const sum = add; // sum과 add 모두 함수처럼 사용 가능!


console.log(sum(1, 2));  // 3
console.log(add(1, 2));  // 3
