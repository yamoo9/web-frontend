import { isNumber } from '../utils/typeIs.js';
import css from '../utils/dom/css.js';

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

// console.log(currentYear + ''); // 2022 -> '2022'

/* 데이터 → 숫자 --------------------------------------------------------------- */

// console.log(Number(notDefined)); // undefined -> NaN (Not a Number)
// console.log(typeof Number(notDefined)); // NaN (Not a Number) -> ? number
// console.log(isNaN(Number(notDefined))); // true (isNumber(n), isNumeric(n))
// console.log(isNumber(Number(notDefined))); // false
// console.log(Number(empty)); // null => 0

// console.log(+'303'); // '303' -> 303
// console.log(+'303px'); // '303px' -> NaN

/* 데이터 → 불리언 -------------------------------------------------------------- */

// console.log(Boolean(fn)); // 객체 (함수 객체, 배열 객체, 일반 객체)
// console.log(!!list);
// console.log(!!empty); // 비교 연산자 == (임의 타입 변환), === (타입 변환 x)

/* -------------------------------------------------------------------------- */
/* 문서객체모델(DOM) API + JavaScript 접근/조작                                     */
/* -------------------------------------------------------------------------- */

// - 문서의 요소에 접근하는 방법 .getElementById(), .querySelectorAll(), .querySelector()
// - 문서 요소에 이벤트 리스너를 연결하는 방법 .addEventListener(), .removeEventListener()
// - 문서 요소로부터 스타일 값을 가져오는 방법 getComputedStyle()
// - 가져온 스타일 값의 타입을 변경하는 방법 type conversion (string → number), parseInt()
// - 문서 요소의 스타일을 업데이트 하는 방법 type conversion (number → string)

function handleIncrement(e) {
  // let targetElement = paragraphElements[0];
  // let fontSizeValue = getStyle(targetElement, 'font-size');
  // fontSizeValue = fontSizeValue + amount;
  // setStyle(targetElement, 'font-size', fontSizeValue + 'px');
  paragraphElements.forEach(function (paragraphElement) {
    let fontSizeValue = css(paragraphElement, 'font-size');
    fontSizeValue = fontSizeValue + amount;
    css(paragraphElement, 'font-size', fontSizeValue + 'px');
  });
}

function handleDecrement(e) {
  // let targetElement = paragraphElements[0];
  // let fontSizeValue = getStyle(targetElement, 'font-size');
  // fontSizeValue = fontSizeValue - amount;
  // setStyle(targetElement, 'font-size', fontSizeValue + 'px');
  paragraphElements.forEach(function (paragraphElement) {
    let fontSizeValue = css(paragraphElement, 'font-size');
    fontSizeValue = fontSizeValue - amount;
    css(paragraphElement, 'font-size', fontSizeValue + 'px');
  });
}

let amount = 3;

// 문서에서 대상 요소(객체) 찾기
const demoElement = document.querySelector('.demo');
const buttonElements = demoElement.querySelectorAll('button'); // [button, button]
const paragraphElements = demoElement.querySelectorAll('p'); // [p, p]

// console.log(demoElement);
// console.log(buttonElements);

// 문서 대상 요소에 이벤트 연결하기
// elementNode.addEventListener(eventType, eventListener, eventOptions?);
// buttonElements // NodeList

// buttonElements[0]
// buttonElements.item(0) // Button Element +
// buttonElements.item(0).addEventListener('click', handleClickButton);
document
  .querySelector('.incrementButton')
  .addEventListener('click', handleIncrement);

// buttonElements.item(1) // Button Element -
// buttonElements.item(1).addEventListener('click', handleClickButton);
document
  .querySelector('.decrementButton')
  .addEventListener('click', handleDecrement);

// 수집한 문서의 대상 집합(NodeList)을 순환(forEach 메서드) 이벤트 연결 처리
// buttonElements.forEach(function (button) {
//   button.addEventListener('click', handleClickButton);
// });

// 이벤트 위임(delegation)
// 부모 요소에 이벤트 연결
// 이벤트 전파(propagation)
