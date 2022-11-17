// timeout

//setTimeout(함수,ms) -> 몇 초 뒤에 실행해줘!

function execute() {
  console.log('1');
  setTimeout(() => {
    console.log('2');
  }, 2000);
  console.log('3');
}

execute(); // 1 3 2초뒤에 2가나옴
