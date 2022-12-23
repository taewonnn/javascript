// 동기 방식
function taskA() {
  console.log("A 작업 끝");
}

taskA();
console.log("코드 끝");

// 비동기 방식
function taskB(a, b, cb) {
  setTimeout(() => {
    const res = a + b;
    cb(res);
  }, 3000);
}

function taskC(a, cb) {
  setTimeout(() => {
    const res = a * 2;
    cb(res);
  }, 1000);
}

function taskD(a, cb) {
  setTimeout(() => {
    const res = a * -1;
    cb(res);
  }, 2000);
}

// 실행
taskB(3, 4, (res) => {
  console.log("B TaASK RESULT : ", res);
});

taskC(7, (res) => console.log("C TASK RESULT : ", res));

taskD(4, (res) => console.log("D TASK RESULT: ", res));
console.log("코드 끝");

// Promise
// 콜백 지옥에서 탈출

// 비동기 작업이 가질 수 있는 상태
// Pending: 대기 상태
// FullFilled : 성공
// Rejected: 실패

function isPositive(number, resolve, reject) {
  setTimeout(() => {
    if (typeof number === "number") {
      // 비동기 작업 성공 시 -> resolve
      resolve(number >= 0 ? "양수" : "음수");
    } else {
      // 비동기 작업 실패 시 -> reject
      reject("주어진 값이 숫자형 값이 아닙니다");
    }
  }, 2000);
}

// 콜백을 이용한 비동기 처리
// isPositive(
//   10,
//   (res) => {
//     console.log("성공적으로 수행됨", res);
//   },
//   (err) => {
//     console.log("실패함", err);
//   }
// );

// Promise를 이용한 비동기 처리
function isPositiveP(number) {
  const executer = (resolve, reject) => {
    setTimeout(() => {
      if (typeof number === "number") {
        console.log(number);
        resolve(number >= 0 ? "양수" : "음수");
      } else {
        reject("주어진 값이 숫자형 값이 아닙니다.");
      }
    }, 2000);
  };
  const asyncTask = new Promise(executer);
  return asyncTask;
}

const res = isPositiveP("fsfs");

res
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
