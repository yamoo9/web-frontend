/* ---------------------------------------------------------------------- */
/* Operators                                                              */
/* ---------------------------------------------------------------------- */

// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상

// 단항 연산자
let unary = +'93.23%';

// console.log(unary);
// console.log(typeof unary);

// 이항 연산자
// single `let` pattern
let a = 10, b = -7;
let abnormal = a * b;

// console.log(abnormal);
// console.log(typeof abnormal);

// 삼항 연산자
// 조건 처리
// 결론 = 조건 ? 참(값) : 거짓(값)
let ternary = 0 ? 100 : -100;
ternary = '0' ? 100 : -100;
// console.log(ternary);

// 산술 연산자: 덧셈
let addition = a + b;

// 산술 연산자: 뺄셈
let subtraction = a - b;

// 산술 연산자: 곱셈
let multiplication = a * b;

// 산술 연산자: 나눗셈
let division = a / b; // sass: math.div(a, b)

// 산술 연산자: 나머지
let remainder = a % b;

// 산술 연산자: 거듭 제곱
let power = a ** b;

// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = '9' * '3';
// console.log(coercionTypeConversion);

// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1, 2, 3] + [4, 5, 6];
// console.log(onlyWorkDefaultValues);

// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)

// 선,후 증감 연산자
// ++, --

// block scope
// function scope
// IIFE (like module)
// let, const
{
  let count = 100;

  count = count + 9;
  count += 9; // -=, *=, /=, %=
  ++count;
  count++;
  --count;
  count--;
}

// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;

// let total = (count % 4) * (count /= 2) + count ** 3; // ?

let total = count % 4;

count = count / 2;

let countPower3 = count ** 3;

total = total * count + countPower3;

console.log(total); // 135
