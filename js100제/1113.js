// 20번
// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

// 입출력
// 입력 : 10 2
// 출력 : 5 0

function div(a) {
  let arr = a.split(' ');
  let 몫 = parseInt(arr[0] / arr[1])
  let 나머지 = arr[0] % arr[1];
  return `${몫} ${나머지}`
}

console.log(div('11 2'));











// 24번

// 민지는 국제 포럼에서 아르바이트를 하게 되었습니다. 민지는 각 국에서 온 참가자들의 명단을 엑셀로 정리하고 있는데 참가자들 이름이 어떤 이는 전부 소문자, 어떤 이는 전부 대문자로 써져 있는 등 형식이 제각각이었습니다.

// 민지를 위해 **이름이 입력되면 전부 대문자로 출력되는 프로그램**을 만들어주세요.


// **입출력**
// 입력 : mary
// 출력 : MARY

function cap(name) {
  return name.toUpperCase();
}

console.log(cap('mary'));






// 26번

// 원의 넓이는 반지름의 길이 x 반지름의 길이 x 3.14로 구할 수 있습니다.
// 함수를 사용하여 원의 넓이를 구하는 코드를 작성해봅시다.

// 입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수를 만들어 주세요.

function cir(n) {
  return (n ** 2) * 3.14;
}

console.log(cir(5));



// 26번


// 우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다.
// 이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다.

// 행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만들어 주세요.


function findPl(ko) {
  let planets = {
    '수성': 'Mercury',
    '금성': 'Venus',
    '지구': 'Earth',
    '화성': 'Mars',
    '목성': 'Jupiter',
    '토성': 'Saturn',
    '천왕성': 'Uranus',
    '해왕성': 'Neptune'
  }
  return planets[ko]
}

console.log(findPl('수성'));




function sol(pl) {
  if(pl === '수성') {
    console.log('Mercury')
  } else if(pl === '금성') {
    console.log('Venus')
  } else if(pl === '지구') {
    console.log('Earth')
  } else if(pl === '화성') {
    console.log('Mars')
  } else if(pl === '목성') {
    console.log('Jupiter')
  } else if(pl === '토성') {
    console.log('Saturn')
  } else if(pl === '천왕성') {
    console.log('Uranus')
  } else if(pl === '해왕성') {
    console.log('Neptune')
  } else {
    console.log('다시 입력해주세요.')
  }
} 

sol('금성');


// function sol2(pl) {
//   switch (pl) {
//     case '수성':
//       console.log('Mercury')
//       break;
//     case '금성':
//       console.log('Venus')
//       break;
  
//     default: console.log('다시 입력해주세요')
//       break;
//   }
// }






// 27번
// 첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.

// 두 개를 합쳐 학생의 이름이 key이고 value가 수학 점수인 객체를 출력해주세요.

// 입력
// Yujin Hyewon
// 70 100

// 출력
// {'Yujin': 70, 'Hyewon': 100}

function stu(names, scores) {
  let obj = {};

  names = names.split(' ');
  scores = scores.split(' ');

  for(let i =0; i < names.length; i++) {
    obj[names[i]] = scores[i];
    console.log(i, obj);
  }

  return obj;
}

console.log(stu('Yujin Hyewon', '70 100'));
console.log(stu('Yujin Hyewon daramZ', '70 100 200'));

