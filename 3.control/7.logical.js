// 논리연산자 Logical operator

// && 그리고(둘 다 만족해야)
// || 또는(둘 중에 하나만 만족해도 실행)
// ! 부정(단항연산자에서 온것)
// !! 불리언값으로 변환 (단항연산자 응용버전)

let num = 8;
if (num >= 0 || num > 20) {
  console.log('👍');
}
if (num != 9) {
  console.log('🙏');
}

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log(!'text'); // false
console.log(!!'text'); // true
