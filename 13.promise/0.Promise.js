// Promise

function taskA(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a + b;
      resolve(res);
    }, 3000);
  });
}

function taskB(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * 2;
      resolve(res);
    }, 1000);
  });
}

function taskC(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * -1;
      resolve(res);
    }, 1000);
  });
}

// taskA(5, 1).then((a_res) => {
//   console.log("a result :", a_res);
//   taskB(a_res).then((b_res) => {
//     console.log("b result : ", b_res);
//     taskC(b_res).then((c_res) => console.log("c result : ", c_res));
//   });
// });

taskA(5, 1)
  .then((a_res) => {
    console.log("a result : ", a_res);
    return taskB(a_res);
  })
  .then((b_res) => {
    console.log("b result: ", b_res);
    return taskC(b_res);
  })
  .then((c_res) => {
    console.log("c result : ", c_res);
  });

// 콜백지옥
// taskA(3, 4, (a_res) => {
//   console.log("task A : ", a_res);
//   taskB(a_res, (b_res) => {
//     console.log("task B :", b_res);
//     taskC(b_res, (c_res) => {
//       console.log("task C :", c_res);
//     });
//   });
// });
