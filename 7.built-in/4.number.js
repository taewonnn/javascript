const num1 = 123;
const num2 = new Number(123); // 메모리 낭비

console.log(typeof num1); // 123
console.log(typeof num2); // [Number: 123]

console.log(Number.MAX_VALUE); // 정수에서 쓸 수 있는 가장 큰 숫자
console.log(Number.MIN_VALUE); // 정수에서 쓸 수 있는 가장 작은 숫자
console.log(Number.MAX_SAFE_INTEGER); // 안전하게 사용할 수 있는 최댓값
console.log(Number.MIN_SAFE_INTEGER); // 안전하게 사용할 수 있는 최솟값
console.log(Number.NaN); // 숫자가 아닌것 
console.log(Number.NEGATIVE_INFINITY); // - 무한
console.log(Number.POSITIVE_INFINITY); // + 무한

// num이 최댓값보다 작니?
if (num1 < Number.MAX_VALUE) {
}

// num이 숫자가 아니니?
if (Number.isNaN(num1)) {
}


// 지수표기법 (매우 크거나 작은 숫자를 표기할때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential()); // 1.02e + 2    * e+2는 10의 2승


// 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed()); // 1234


console.log(num4.toString());
// 아랍(해당 나라)에 맞는 숫자로 표기!
console.log(num4.toLocaleString('ar-EG')); // 


// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5)); // 1234.1
console.log(num4.toPrecision(4)); // 1234
console.log(num4.toPrecision(2)); // 1.2e + 3  * 전체 자릿수 표기가 안될때는 지수표기법


console.log(Number.EPSILON);  // 0과 1 사이에서 나타낼 수 있는 가장 작은 숫자


if (Number.EPSILON > 0 && Number.EPSILON < 1) {
  console.log(Number.EPSILON); // 0과 1사이에서 나타낼 수 있는 가장 작은 숫자
}
const num = 0.1 + 0.2 - 0.2; 
console.log(num); // 0.10000000003이 나옴...  * 자바스크립트는 2진수로 변환하여 계산하다보니...작은 오차 발생..


function isEqual(original, expected) {
  return Math.abs(original - expected) < Number.EPSILON;
}

console.log(isEqual(1, 1)); // true
console.log(isEqual(0.1, 0.1)); // true
console.log(isEqual(num, 0.1)); // true
