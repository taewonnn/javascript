// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]



// 재사용성이 높지 않아! 밑에서 재사용성이 높도록 다시 작성!
// function replace(array) {
//   const replaced = Array.from(array)
//   for(let i = 0; i < replaced.length; i++) {
//     if(replaced[i] === '🍓') {
//       replaced[i] = '🥝';
//     }
//   }
//   return replaced;
// }

// const array = ['🍌', '🍓', '🍇', '🍓'];
// const result = replace(array);
// console.log(result); // (4) ['🍌', '🥝', '🍇', '🥝']



function replace(array, from, to) {
  const replaced = Array.from(array)
  for(let i = 0; i < replaced.length; i++) {
    if(replaced[i] === 'from') {
      replaced[i] = 'to';
    }
  }
  return replaced;
}

const array = ['🍌', '🍓', '🍇', '🍓'];
const result = replace(array, '🍓', '🥝');
console.log(result); // (4) ['🍌', '🥝', '🍇', '🥝']





// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2


function countArr(array, thing) {
  let ct = 0;
  for(let i = 0; i < array.length; i++) {
    if(array[i] === thing) {
      ct += 1;
    }
  }
  return ct;
}

console.log(countArr([ '🍌', '🥝', '🍇', '🥝', '🥝' ], '🥝')); // 3







// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]


function match(a, b) {
  const result = [];
  for(let i = 0; i < a.length; i++) {
    if(b.includes(a[i])) {
      result.push(a[i]);
    }
  }
  return result;
}

console.log(match(['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']))













// function match(input, search) {
//   const result = [];
//   for (let i = 0; i < input.length; i++) {
//     if (search.includes(input[i])) {
//       result.push(input[i]);
//     }
//   }
//   return result;
// }
// console.log(match(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']));
