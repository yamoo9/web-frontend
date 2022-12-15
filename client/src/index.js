function delay(timeout = 1000 /* 1000ms === 1s */, shouldReject = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldReject) {
        resolve({ message: '지연 처리에 성공했습니다. 😃' });
      } else {
        reject({ message: '처리 시간이 지연되어 종료됩니다. 🥹' });
      }
    }, timeout);
  });
}

delay(2000, true)
  .then((response) => {
    console.log('2s: ', response.message);
    return `✅ ${response.message}`;
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error('2s: ', error.message);
  })
  .finally(() => {
    console.info('2s 요청이 종료되었습니다.');
  });

delay(4000, true)
  .then((response) => {
    console.log('4s: ', response.message);
  })
  .catch((error) => {
    console.error('4s: ', error.message);
  })
  .finally(() => {
    console.info('4s 요청이 종료되었습니다.');
  });
