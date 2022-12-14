// -----------------------------------------------------------------------------
// TODO
// -----------------------------------------------------------------------------
// - [ ] 일반 함수 식, 화살표 함수의 this에 대해 학습합니다.
// - [ ] 객체의 메서드에는 어떤 방법을 사용해 함수를 작성하는 것이 좋을까요?
// - [ ] 객체에서 화살표 함수는 언제 사용하는 것이 좋을까요?
// - [ ] 객체 단축 속성 이름(Shorthand property names)을 활용해 구문을 수정합니다.
// -----------------------------------------------------------------------------

// 일반 함수 식 참조
const show = function () {
  return `${this.name} 보다.`;
};

const look = function () {
  return `${this.name} 지켜보다.`;
};

// 화살표 함수 식 참조
// 화살표 함수 식 내부의 this는 일반 함수의 this와 가리키는 대상이 다릅니다.
const watch = () => {
  return `${this.name} 관찰하다.`;
};

// 아래 ES5 코드를 ES6 코드로 변경합니다. ----------------------------------------------

var euid = {
  name: '이듬',
  show: show,
  look: look,
  watch: watch,
};


// ------------------------------------------------------------------------------
// TEST                                                                      
// ------------------------------------------------------------------------------
// - [ ] Jest 테스트 러너를 구동한 후, 테스트가 성공하도록 함수 로직을 구성합니다.
// ------------------------------------------------------------------------------

const setDynamicProperty = (object, propName, value) => {
  object[propName] = function () {
    return this.name + '처럼 ' + value + '하다.';
  };
  return [propName, value];
};

// test('계산된 속성을 사용해 객체의 메서드 이름을 think로 설정할 수 있다.', () => {
//   let propertyName = 'think';
//   const [propName] = setDynamicProperty(euid, propertyName, '생각하다');
//   expect(propName).toEqual(propertyName);
// });

// test('계산된 속성을 사용해 객체의 메서드 이름을 behavior로 변경할 수 있다.', () => {
//   let methodName = 'behavior';
//   let returnValue = '행동하다';
//   const [,value] = setDynamicProperty(
//     euid,
//     methodName,
//     () => returnValue
//   );
//   expect(value()).toEqual(euid[methodName]);
// });
