function delay() {
  var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
  var shouldReject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (!shouldReject) {
        resolve({
          message: '지연 처리에 성공했습니다. 😃'
        });
      } else {
        reject({
          message: '처리 시간이 지연되어 종료됩니다. 🥹'
        });
      }
    }, timeout);
  });
}
delay(2000, true).then(function (response) {
  console.log('2s: ', response.message);
  return "\u2705 ".concat(response.message);
}).then(function (greetingMessage) {
  console.log(greetingMessage);
}).catch(function (error) {
  console.error('2s: ', error.message);
}).finally(function () {
  console.info('2s 요청이 종료되었습니다.');
});
delay(4000, true).then(function (response) {
  console.log('4s: ', response.message);
}).catch(function (error) {
  console.error('4s: ', error.message);
}).finally(function () {
  console.info('4s 요청이 종료되었습니다.');
});