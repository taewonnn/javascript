// 주어진 숫자 만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함

// if) 5 전달, 순회하는 숫자를 다 출력하고 싶음
// if) 5 전달, 순회하는 숫자의 두배값을 다 출력하고 싶음



function iterate(max, action) {
  for(let i =0; i < max; i++) {
    action(i);
  }
}

function log(num) {
  console.log(num);
}

iterate(3, log); // 0 1 2


function doublelog(num) {
  console.log(num * 2);
}

iterate(3, doublelog); // 0 2 4

// 화살표함수 이용
iterate(3, (num) => console.log(num));
iterate(3,(num) => console.log(num * 2));


// setTimeout
// 형식 : setTimeout(callback, 1000);
// 1초 뒤 콜백함수 실행해줘

// 예시
setTimeout(() => {
  console.log('3초 뒤 이 함수가 실행될거임')
}, 3000);

























// setTimeout(() => {
//   console.log('3초뒤 이 함수가 실행될거예요');
// }, 3000);
