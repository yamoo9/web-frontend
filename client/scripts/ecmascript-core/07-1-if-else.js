/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = !true; // undefined

// 영화 볼거니?
let goingToWatchMovie = !false;

function conditionStatement() {
  let responseMessage = '';

  // if 문(statement)
  // 그 영화 봤니?
  if (didWatchMovie === true) {
    // 조건이 참이면 코드 실행
    responseMessage = '응! 그 영화 재밌더라! 😃';
  }
  // else 절(caluse)
  else {
    // 조건이 거짓인 경우 코드 실행
    // 영화 볼거니?
    if (goingToWatchMovie === true) {
      responseMessage = '응 볼 생각이야! 기대된다!';
    } else {
      responseMessage = '아니... 별로 재미없을 거 같아.';
    }
  }

  console.log(responseMessage);
}

// IIFE 패턴
(function () {
  let responseMessage = '';

  // else if 복수 조건 처리
  if (didWatchMovie) {
    responseMessage = '응! 그 영화 재밌더라! 😃';
  } else if (goingToWatchMovie) {
    responseMessage = '응 볼 생각이야! 기대된다!';
  } else {
    responseMessage = '아니... 별로 재미없을 거 같아.';
  }

  console.log(responseMessage);
})();

// 조건부 연산자 식(expression)
let responseMessage = didWatchMovie
  ? '응! 그 영화 재밌더라! 😃'
  : '응 볼 생각이야! 기대된다!';
// console.log(responseMessage);

// 멀티 조건부 연산자 식

didWatchMovie = !true;
goingToWatchMovie = false;

responseMessage = didWatchMovie
  ? '응! 그 영화 재밌더라! 😃'
  : goingToWatchMovie
  ? '응 볼 생각이야! 기대된다!'
  : '아니... 별로 재미없을 거 같아.';

// console.log(responseMessage);
