/* ---------------------------------------------------------------------- */
/* Nullish Coalescing Operator                                            */
/* ---------------------------------------------------------------------- */

// null 병합 연산자 ??

let emailAddress = 'yamoo9@gmail.com';
let receivedEmailAddress;

// if (emailAddress === undefined || emailAddress === null) {
//   receivedEmailAddress = 'user@company.io';
// } else {
//   receivedEmailAddress = emailAddress;
// }

// 3항 연산자 식(ternary)
// receivedEmailAddress =
//   emailAddress === undefined || emailAddress === null
//     ? 'user@company.io'
//     : emailAddress;

// 논리 곱(||) 연산자 식
// receivedEmailAddress = emailAddress || 'user@company.io';

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.
receivedEmailAddress = emailAddress ?? 'user@company.io';
console.log(receivedEmailAddress);

/* ?? vs. || ----------------------------------------------------------- */

// || → 첫번째 Truthy 값을 반환 (0, '', null, undefined, false)
// ?? → 첫번째 정의된(defined: 0, '', false) 값을 반환
