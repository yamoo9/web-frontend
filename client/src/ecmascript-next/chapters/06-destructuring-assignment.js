// -----------------------------------------------------------------------------
// TODO
// -----------------------------------------------------------------------------
// - [ ] 구조 분해 할당(Destructuring assignment)을 활용해 구문을 수정합니다.
// -----------------------------------------------------------------------------

var state = Object.freeze({
  loading: false,
  error: null,
  data: [
    { id: 'kwdvj2ke1', title: 'euid' },
    { id: 'zwecr8kip', title: 'react' },
    { id: 'jdw1vkke1', title: 'gitbook' },
  ],
});

// 객체 속성과 일치하는 변수 선언 후, 속성 값 할당
var loading = state.loading;
var error = state.error;
var data = state.data;

// 배열의 첫번째 아이템, 나머지 집합 추출
var firstData = data[0];
var restData = data.slice(1);


// ------------------------------------------------------------------------------
// TEST                                                                      
// ------------------------------------------------------------------------------
// - [ ] Jest 테스트 러너를 구동한 후, 테스트가 성공하도록 함수 로직을 구성합니다.
// ------------------------------------------------------------------------------

// state 객체 구조 분해 할당
// test('loading === false', () => {
//   expect(loading).toBeFalsy();
// });

// state.data 배열 구조 분해 할당
// test('restData.length === 2', () => {
//   expect(restData).toHaveLength(2);
// });
