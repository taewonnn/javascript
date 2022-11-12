// js 100제

// 문제1
// 400, 500 빼기
var nums = [100, 200, 300, 400, 500];

nums.pop();
nums.pop();

console.log(nums);

// pop -> 배열의 맨 뒤 요소가 삭제됨



// 문제2

// 데이터
// var arr = [200, 100, 300];
// //pass
// console.log(arr);

// 출력
// [200, 100, 10000, 300]


var arr = [200, 100, 300]
arr.splice(2,0,1000)
console.log(arr);


// .splice(시작점, 시작점으로부터 삭제할 원소의 개수, 삽입할 원소1, 삽입할 원소2,...)


// 문제9
// var year = '2019';
// var month = '04';
// var day = '26';
// var hour = '11';
// var minute = '34';
// var second = '27';

// var result = //빈칸을 채워주세요

// console.log(result);

// 출력
// 2019/04/26 11:34:27

// var result = year.concat('/', month, '/', day, ' ',hour, ':', minute, ':', second)
// console.log(result);


// 문제 10
// 크리스마스 날, 은비는 친구들과 함께 파티를 하기로 했습니다. 그런데, 크리스마스 트리를 사는 것을 깜빡하고 말았습니다. 온 가게를 돌아다녀 봤지만 크리스마스 트리는 모두 품절이었습니다. 
// 하는 수 없이 은비는 프로그래밍으로 트리를 만들기로 합니다. 

// 입력
// 5

// 출력
//     *
//    ***
//   *****
//  *******
// *********


// function mt(floor) {
//   let result2 = ""
//   for(i=1; i<floor * 2; i+=2){
//     result2 += ' '.repeat()
//     result2 += '*'.repeat(i)
//     result2 += '\n' 
//   }
//   return result2;
// }

// console.log(mt(5));


let result2 =''
function mt(floor) {
  for(i=0; i<floor; i++){
    result2 += ' '.repeat(floor-1-i)
    result2 += '*'.repeat((2*i)+1);
    result2 += '\n' 
  }
  return result2;
}

console.log(mt(5));



// -> .repeat() 활용
function mr(floor) {
  let result3 =''
  for(i=0; i<floor; i++){
    result3 += '* '.repeat(floor);
    result3 += '\n' 
  }
  return result3;
}

console.log(mr(3));
console.log(mr(5));


function mr2(floor) {
  let result =''
  for(i=0; i<floor; i++){
    for(j=0; j<floor; j++){
      result += '* '
    }
    result += '\n' 
  }
  return result;
}

console.log(mr2(10));




