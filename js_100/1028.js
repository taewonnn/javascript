// 13번
function daram(n) {
  let planets = ['수성', '금성', '지구', '화성', '목성', '토성','천왕성','해왕성']
  console.log(planets[n-1]);  
}

daram(4);


// 14번
function game(n) {
  if (n % 3 === 0) {
    console.log('짝')
  } else {
    console.log(n)
  }
}

game(3);
game(4);



// 15번
function intro(name) {
  return `안녕하세요. 저는 ${name}입니다.`
}

console.log(intro('김다정'));

// 16번
function rev(str) {
  let result = str.split('')
  result.reverse()
  result = result.join('')
  return result
}
console.log(rev('거꾸로'))












