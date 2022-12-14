// -----------------------------------------------------------------------------
// TODO
// -----------------------------------------------------------------------------
// - [ ] defaultArg 유틸리티 함수 대신, 기본 매개변수 문법을 활용해봅니다.
// - [ ] truncateText 함수 로직을 작성합니다.
// -----------------------------------------------------------------------------

const defaultArg = (value, initialValue) => {
  if (value === null || value === undefined) {
    value = initialValue;
  }
  return value;
};

const truncateText = (text, limit) => {
  limit = defaultArg(limit, 100);
  return '...';
};

// ------------------------------------------------------------------------------
// TEST                                                                      
// ------------------------------------------------------------------------------
// - [ ] Jest 테스트 러너를 구동한 후, 테스트가 성공하도록 함수 로직을 구성합니다.
// ------------------------------------------------------------------------------

// const desc = `
//   기본 매개변수(Default Paramters)는 함수 매개변수의 
//   기본 값을 선언적으로 표현하는 강력한 방법입니다.
// `.trim();

// test('truncateText(desc) 함수 반환 값 기본 글자 수는 103', () => {
//   expect(truncateText(desc)).toHaveLength(100 + 3);
// });

// test('truncateText(desc, 62) 반환 값의 글자 수는 65', () => {
//   let sliceCount = 62;
//   expect(truncateText(desc, sliceCount)).toHaveLength(sliceCount + 3);
// });