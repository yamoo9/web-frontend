/**
 * 문서 요소의 스타일 속성 값 반환 함수
 * @param {HTMLElement} elementNode
 * @param {string} propName
 * @returns number
 */
export function getStyle(elementNode, propName) {
  let computedValue = getComputedStyle(elementNode).getPropertyValue(propName);
  return parseInt(computedValue, 10);
}

/**
 * 문서 요소의 스타일 설정 함수
 * @param {HTMLElement} elementNode
 * @param {string} propName
 * @param {any} value
 */
export function setStyle(elementNode, propName, value) {
  elementNode.style[propName] = value;
}

// function css() {

// }
