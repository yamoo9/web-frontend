/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

let a = 10; // true
let b = ''; // false
let value = Boolean(b); // false

// 논리곱(그리고, AND, &&) 연산자
let AandB = a && b;

// 논리합(또는, OR, ||) 연산자
let AorB = a || b;

// 부정(NOT, !) 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
// let whichFalsy = true && 10 && ' ' && 'finish'; // 'finish'

// console.log(whichFalsy);

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = true || 10 || ' ' || 'finish'; // true

// console.log(whichTruthy);

// isSigned() && routeAuthPage();
// !isSigned() && routeLoginPage();
