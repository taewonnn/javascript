// global object(전역객체)

console.log(globalThis);
console.log(this);
console.log(Infinity);
console.log(NaN);
console.log(undefined);

// eval( ) -> ()안에 문자열 형태를 자바스크립트로 표현해줌
eval('const num = 2; console.log(num)'); // 2
//isFinite 유한한지...
console.log(isFinite(1)); // true
console.log(isFinite(Infinity)); // false

// 숫자로 변경
console.log(parseFloat('12.43')); // 12.43

// 정수로 변경
console.log(parseInt('12.43')); // 12
console.log(parseInt('11')); // 11


// URL (URI, Uniform Resource Identifier 하위 개념)
// 아스키 문자로만 구성되어야 함
// 한글이나 특수문자는 이스케이프 처리(다른 문자로 변환) 해야 한다

const URL = 'https://드림코딩.com';
const encoded = encodeURI(URL);
console.log(encoded);

// 인코딩된 url을 다시 풀어줄 때 decode
const decoded = decodeURI(encoded);
console.log(decoded);


// 전체 URL이 아니라 부분적인 것은 Component 이용함
const part = '드림코딩.com';
console.log(encodeURIComponent(part));
