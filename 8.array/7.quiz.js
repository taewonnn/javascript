// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

const { func } = require('prop-types');


function replace(array, from, to) {
  return array.map((item) => {
    return item === from ? to : item;
  })
}

const array = ['🍌', '🍓', '🍇', '🍓'];
const result = replace(array, '🍓', '🥝');
console.log(result);





// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2


// 2가지 방식

// reduce 사용
// function count(array, item) {
//   return array.reduce((count, value) => {
//     if(value === item) {
//       count++;
//     }
//     return count;
//   }, 0)
// }

// filter 사용! 위 코드를 조금 더 깔끔하게!
function count(array, item) {
  return array.filter(value => value === item).length;
}


console.log(count([ '🍌', '🥝', '🍇', '🥝' ], '🥝')) // 2






// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

// filter 사용
function match(input, search) {
  return input.filter(item => search.includes(item));
}

console.log(match(['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓'])); // [ '🍌', '🍇' ]





// 퀴즈 4
// 5이상(보다 큰)의 숫자들의 평균

// 배열에서 5보다 큰 숫자를 고르다 -> filter
// 5보다 큰 숫자들의 평균 -> 아이템 모아서모아서 더한 후 평균값 구한다 -> reduce

const nums = [3, 16, 5, 25, 4, 34, 21]
const result2 = nums
  .filter((item) => item > 5) // [16, 25, 34, 21]  5이상만 걸러내서 새로운 배열이 만들어짐
    .reduce((avg, item, index, array) => avg + item / array.length, 0)

    console.log(result2); // 24





