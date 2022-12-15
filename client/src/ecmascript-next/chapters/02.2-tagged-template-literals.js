// -----------------------------------------------------------------------------
// TODO
// -----------------------------------------------------------------------------
// - [ ] styled, $styled 함수를 작성합니다.
// - [ ] 태그 템플릿(Tagged Template) 구문을 활용해봅니다.
// -----------------------------------------------------------------------------

const virtualNode = {
  name: 'figure',
  className: 'tagged-template-literals',
  style: { cssText: '' },
};

const styled = (styleRules, targetElement) => {
  // 코드 로직을 작성합니다.
  // 리듀서 함수 = 순수 함수 (함수형 프로그래밍 : 인풋/아웃풋이 동일한 타입, 사이드이펙트 X)
  targetElement.style.cssText = styleRules.reduce(
    (cssCode, ruleCode) => cssCode + ruleCode,
    ''
  );
  return targetElement;
};

const $styled = () => {
  // 코드 로직을 작성합니다.
};

/* PRACTICE ----------------------------------------------------------------- */

let values = {
  margin: '10px',
  color: '#d08471',
};

let result = styled(['margin:10px;', `color:${values.color};`], virtualNode);

console.log('A: ', result.style.cssText);

result = styled`
  ${virtualNode}
  margin: 10px;
  color: #d08471;
`;

console.log('B: ', result.style.cssText);

// ------------------------------------------------------------------------------
// TEST
// ------------------------------------------------------------------------------
// - [ ] Jest 테스트 러너를 구동한 후, 테스트가 성공하도록 함수 로직을 구성합니다.
// ------------------------------------------------------------------------------

// describe('styled 유틸리티 suite', () => {
//   let values = {
//     margin: '10px',
//     color: '#d08471'
//   };

//   test('styled 유틸리티 ← 일반 함수 구문 활용', () => {
//     const received = styled(['margin:10px;', `color:${values.color};`], virtualNode);

//     expect(received.style.cssText).toBe(virtualNode.style.cssText);
//   });

//   test('styled 유틸리티 ← 태그 템플릿 구문 활용', () => {
//     const received = styled`
//       ${virtualNode}
//       margin: ${values.margin};
//       color: ${values.color};
//     `;

//     expect(received.style.cssText).toBe(virtualNode.style.cssText);
//   });

//   test('$styled 유틸리티 ← 커링 + 태그 템플릿 구문 활용', () => {
//     const received = $styled(virtualNode)`
//       margin: ${values.margin};
//       color: ${values.color};
//     `;

//     expect(received).toStrictEqual(virtualNode);
//   });
// });
