import typeIs from '../utils/typeIs.js';

/* ---------------------------------------------------------------------- */
/* Data Types                                                             */
/* ---------------------------------------------------------------------- */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let dontHas = null; // document element, event

// 2. 값이 할당되지 않은 상태
let isNotDefined;
let unknown;

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
// String
let message = "오늘도 수고했어!";
let greeting = '저녁은 먹었어?';
let sendMessage = `${message} ${greeting}`; // ES6(2015) Template Literals

// 4. 정수(int), 부동 소수점 숫자(길이 제약)
// Number
let price = 109.89;

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
// BigInt
let bigintType = 101n;

// 6. 참(true: 1, yes) 또는 거짓(false: 0, no)
let hasChildren = true;

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
let elementList = [10, 8, 4, 2];  // 배열(Array)
elementList = document.all;
let cssMap = { color: 'white', backdropFilter: 'blur(2px)' }; // 객체(Object)
let showMe = function () { 
  console.log('show me'); 
  console.log('look me'); 
  console.log('watch me'); 
}; // 함수(Function)

// console.log(typeIs(null));
// console.log(typeIs([]));
// console.log(typeIs({}));

// console.log(typeof elementList); // 객체.속성
// console.log(Array.isArray(elementList)); // 객체.속성
// console.log(cssMap);
// console.log(showMe);

// showMe();

// 8. 고유한 식별자(unique identifier)
// Symbol
let uniqueKey1 = Symbol('ecmascript');
let uniqueKey2 = Symbol('ecmascript');

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류
// 언어의 문제를 피하기 위한 해결책
// 유틸리티(헬퍼) 함수
// function typeIs(data) {
//   return Object.prototype.toString.call(data).toLowerCase().slice(8,-1);
// }