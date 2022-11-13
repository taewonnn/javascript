// 24번

// 민지는 국제 포럼에서 아르바이트를 하게 되었습니다. 민지는 각 국에서 온 참가자들의 명단을 엑셀로 정리하고 있는데 참가자들 이름이 어떤 이는 전부 소문자, 어떤 이는 전부 대문자로 써져 있는 등 형식이 제각각이었습니다.

// 민지를 위해 **이름이 입력되면 전부 대문자로 출력되는 프로그램**을 만들어주세요.


// **입출력**
// 입력 : mary
// 출력 : MARY

function cap(name) {
  name.toUppercase();
}



// 25번

// 원의 넓이는 반지름의 길이 x 반지름의 길이 x 3.14로 구할 수 있습니다.
// 함수를 사용하여 원의 넓이를 구하는 코드를 작성해봅시다.

// 입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수를 만들어 주세요.

function cir(n) {
  return n * n * 3.14;
}

console.log(cir(5));



// 26번


// 우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다.
// 이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다.

// 행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만들어 주세요.

function sol(pl) {
  if(pl === 수성) {
    return console.log('Mercury')
  } else if(pl === 금성) {
    return console.log('Venus')
  } else if(pl === 지구) {
    return console.log('Earth')
  } else if(pl === 화성) {
    return console.log('Mars')
  } else if(pl === 목성) {
    return console.log('Jupiter')
  } else if(pl === 토성) {
    return console.log('Saturn')
  } else if(pl === 천왕성) {
    return console.log('Uranus')
  } else if(pl === 해왕성) {
    return console.log('Neptune')
  } else {
    return console.log('다시 입력해주세요.')
  }
} 