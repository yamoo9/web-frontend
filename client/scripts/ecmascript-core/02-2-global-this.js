/* --------------------------------------------------------------------- */
/* Global This                                                           */
/* --------------------------------------------------------------------- */

var objectVariable = '전역 객체의 변수';
let declarativeVariable = '전역 변수';

// globalThis를 통해 접근 가능한 변수와 그렇지 않은 변수는?
console.log(globalThis.objectVariable);
console.log(globalThis.declarativeVariable);


// 전역 객체는 이전 버전과의 호환성으로 인해 JavaScript가 제거할 수 없는 실수로 간주됩니다. 
// 성능에 부정적인 영향을 미치며 일반적으로 혼란스럽습니다. 전역 객체를 사용한 변수 사용은
// 문제를 발생시킬 소지가 있고, 테스트가 어려우니 가급적 사용하지 않는 것이 좋습니다.
// 참고: https://mzl.la/3dCPzCa
// 주의! Microsoft사의 IE 브라우저 미지원