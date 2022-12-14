import { isNumber } from '../utils/typeIs.js';

/* -------------------------------------------------------------------------- */
/* Type Conversion                                                            */
/* -------------------------------------------------------------------------- */

let notDefined; // undefined
let empty = null;
let message = 'hello';
let currentYear = 2022;
let tenBigInt = 10n;
let isLive = true;
let uniqueSymbol = Symbol('unique');

const fn = function () {}; // function literal
const list = ['one', 'ten'];
const map = { x: 101, y: -91 };

/* 데이터 → 문자 --------------------------------------------------------------- */

// console.log(notDefined); // undefined
// console.log(typeof String(notDefined)); // 'undefined'
// console.log(typeof String(isLive)); // 'true'
// console.log(typeof String(currentYear)); // '2022' 숫자형 문자
// console.log(JSON.stringify(String(map), null, 2));

/* 데이터 → 숫자 --------------------------------------------------------------- */

console.log(Number(notDefined)); // undefined -> NaN (Not a Number)
console.log(typeof Number(notDefined)); // NaN (Not a Number) -> ? number
console.log(isNaN(Number(notDefined))); // true (isNumber(n), isNumeric(n))
console.log(isNumber(Number(notDefined))); // false
console.log(Number(empty)); // null => 0

// CommonJS, AMD, ....
// ES Modules

/* 데이터 → 불리언 -------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* 문서객체모델(DOM) 접근/조작                                                      */
/* -------------------------------------------------------------------------- */

// - 문서의 요소에 접근하는 방법
// - 문서 요소에 이벤트 리스너를 연결하는 방법
// - 문서 요소로부터 스타일 값을 가져오는 방법
// - 가져온 스타일 값의 타입을 변경하는 방법
// - 문서 요소의 스타일을 업데이트 하는 방법
