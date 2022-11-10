// string

const textObj = new String('Hello World!');
const text = 'Hello World!'; 

console.log(textObj); // [String: 'Hello World!']
console.log(text); // Hello World!
console.log(text.length); //  12  - 문자열의 길이


// 문자열의 해당 인덱스에 어떤 문자가 있는지
console.log(text[0]); // H
console.log(text[1]); // e
console.log(text[2]); // l
console.log(text.charAt(0)); // H
console.log(text.charAt(1)); // e
console.log(text.charAt(2)); // l


// 해당 문자열의 위치를 인덱스로
console.log(text.indexOf('l')); // 2
// 뒤에서부터 찾기 -> lastIndexOf
console.log(text.lastIndexOf('l')); // 9

// 포함되어있는지(대소문자 구분함)
console.log(text.includes('tx')); // false
console.log(text.includes('h')); // false
console.log(text.includes('H')); // true

console.log(text.startsWith('He')); // true
console.log(text.endsWith('!')); // true

// 대문자 , 소문자로 변환
console.log(text.toUpperCase()); // HELLO WORLD!
console.log(text.toLowerCase()); // hello world!

// 특정 문자열 삭제하기
// substring(시작위치, 몇 번째 이전까지)
console.log(text.substring(0, 2)); // He
console.log(text.slice(2)); // llo World!
console.log(text.slice(-2)); // d!

// trim -> 공백 제거
const space = '            space       ';
console.log(space.trim()); // space


// split -> 문자열을 끊어주기
const longText = 'Get to the, point';
console.log(longText.split(' ')); //  ['Get', 'to', 'the,', 'point' ]
console.log(longText.split(', ', 2)); // [ 'Get to the', 'point' ]
