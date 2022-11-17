// promise  -> 비동기적으로 처리될 수 있도록 도와줌
// then(일이 끝난다음에 등록), catch(에러가 발생했을 때 잡을 수 있는), finally(최종적으로 모든일이 끝났을 때 사용)

// pending: 이제 막 promise가 만들어져서 일이 끝나지 않은 상태
// fulfulled: 비동기적인 코드가 성공적으로 실행된 상태
// rejected: 실패한 상태 / 에러가 발생한 상태


function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error('seconds가 0보다 작음'));
    }
    setTimeout(resolve, seconds * 1000);
  });
}

// runInDelay(2)
//   .then(필요한 일을 수행)
//   .catch(에러를 처리)
//   .finally(최종적으로 성공하든 실패하든 무조건 호출!);


runInDelay(2)
  .then(() => console.log('타이머 완료!'))
  .catch(console.error)
  .finally(() => console.log('끝났다!'));
