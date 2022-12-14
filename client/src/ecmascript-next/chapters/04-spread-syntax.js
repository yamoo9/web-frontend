// -----------------------------------------------------------------------------
// TODO
// -----------------------------------------------------------------------------
// - [ ] 전개 구문(Spread Syntax)을 활용해 배열 및 객체 전개, 합성을 구현합니다.
// - [ ] 함수 문 또는 식 → 화살표 함수 식으로 변경합니다.
// -----------------------------------------------------------------------------

// 배열 전개 ---------------------------------------------------------------------

var integers = [-1, 0, 32, -101, 24];
var maxInt = Math.max.apply(Math, [302, 1, 2, 30, -101].concat(integers));

// 객체 전개 ---------------------------------------------------------------------

// 객체 합성 유틸리티 함수
var extend = function () {
  var _mixinObject = arguments[0];
  var _restObjects = [].slice.call(arguments, 1);

  var _mixin = function (o1, o2) {
    for (var key in o2) {
      if ({}.hasOwnProperty.call(o2, key)) {
        var value = o2[key];
        if (value && typeof value === 'object' && value.length) {
          o1[key] = (o1[key] || []).concat(value);
        } else if (value && typeof value === 'object' && !value.length) {
          o1[key] = _mixin(o1[key] || {}, value);
        } else {
          o1[key] = value;
        }
      }
    }
    return o1;
  };

  for (var i = 0, l = _restObjects.length; i < l; ++i) {
    _mixin(_mixinObject, _restObjects[i]);
  }

  return _mixinObject;
};

// 상태 객체
// 불변(immutable) 데이터 관리
var state = {
  loading: false,
  error: null,
  data: [{ id: 101, title: '초기 데이터' }],
};

// 상태 업데이트 유틸리티 함수
var setState = function(type) {
  let newState = type;
  if (typeof newState === 'function') {
    newState = type(state);
  }
  return extend({}, state, newState);
};


// ------------------------------------------------------------------------------
// TEST                                                                      
// ------------------------------------------------------------------------------
// - [ ] Jest 테스트 러너를 구동한 후, 테스트가 성공하도록 함수 로직을 구성합니다.
// ------------------------------------------------------------------------------

// test('maxInt 값은 302', () => {
//   expect(maxInt).toBe(302);
// });

// test('newState의 loading 상태 값은 true', () => {
//   const newState = setState({
//     loading: true,
//   });

//   expect(newState.loading).toBeTruthy();
// });

// test('newState() 함수 깊은 복사(deep copy) 테스트', () => {
//   const newState = setState((state) => ({
//     data: [...state.data, { id: 201, title: '추가 데이터' }],
//   }));

//   expect(newState).toStrictEqual({
//     ...state,
//     data: [
//       { id: 101, title: '초기 데이터' },
//       { id: 201, title: '추가 데이터' },
//     ],
//   });

//   expect(newState.data).toHaveLength(2);
// });