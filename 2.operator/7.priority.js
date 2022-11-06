// priority 연산자 우선순위

let a = 2;
let b = 3;

// + 보다 * 우선으로
// 우선적용하고 싶은 곳은 ()


let result = ((a + b) * 4) / 5;
console.log(result);  // 4

result = a++ + b * 4;
console.log(result);  // 14
