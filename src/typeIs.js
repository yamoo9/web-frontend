// 함수 선언 문
function typeIs(data) {
  return Object.prototype.toString.call(data).toLowerCase().slice(8, -1);
}

// 함수 (표현) 식
const isString = function (data) {
  return typeIs(data) === 'string';
};

// 화살표 함수 식
const isNumber1 = (data) => {
  return typeIs(data) === 'number' && !isNaN(data);
};

const isNumber2 = (data) => {
  return typeIs(data) === 'number' && !isNaN(data);
};

const isNumber3 = (data) => typeIs(data) === 'number' && !isNaN(data);
