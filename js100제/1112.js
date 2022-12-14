// 15번
// 신학기가 시작되고, 아이들이 돌아가면서 자기소개를 하기로 했습니다.

// 만약 입력으로 김다정이라는 이름이 주어지면 "안녕하세요. 저는 김다정입니다."라고 출력하게 해주세요.

// function intro(name) {
//   console.log(`안녕하세요. 저는 ${name}입니다.`)
// }

function intro(name) {
  return `안녕하세요. 저는 ${name}입니다.`
}

console.log(intro('김다정'));


// 16번
// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.
// ex. 거꾸로 -> 로꾸거

function rev(str) {
  let result = str.split('')
  result.reverse()
  result = result.join('')
  return result
}

console.log(rev('거꾸로'));


// 17번
// 유주는 놀이공원 아르바이트 중입니다. 그런데 놀이기구마다 키 제한이 있습니다.
// 유주가 담당하는 놀이기구는 키가 150cm 이상만 탈 수 있습니다.

// 입력으로 키가 주어지면
// 키가 150이 넘으면 YES를 틀리면 NO를 출력하는 프로그램을 작성하세요.

function hei(i){
  if(150 <= i) {
    console.log("YES")
  } else {
    console.log("NO")
  }
}

hei(151);
hei(149);



// 18번  
// 영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.

// 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요. 
// 단, 소숫점 자리는 모두 버립니다.

function evl(a, b, c) {
  return Math.floor((a + b + c) / 3);
  // return parseInt((a + b + c) /3);
}

console.log(evl(29, 20, 50));









// 19번
// 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.

function squ(a, b) {
  return a ** b
}

console.log(squ(2,3));


// 20번
// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 **그 몫과 나머지를 공백으로 구분하여 출력하세요.
// 입력 : 10 2
// 출력 : 5 0

