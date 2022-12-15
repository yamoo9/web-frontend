/**
 * 문서 요소의 스타일 속성 값 반환 함수
 * @param {HTMLElement} elementNode
 * @param {string} propName
 * @returns number
 */
function getStyle(elementNode, propName) {
  let computedValue = getComputedStyle(elementNode).getPropertyValue(propName);
  return parseInt(computedValue, 10);
}

/**
 * 문서 요소의 스타일 설정 함수
 * @param {HTMLElement} elementNode
 * @param {string} propName
 * @param {any} value
 */
function setStyle(elementNode, propName, value) {
  elementNode.style[propName] = value;
}

/**
 * 문서 요소의 스타일 값을 읽거나, 쓸 수 있는 유틸리티 함수
 * @param {HTMLElement} elementNode
 * @param {string} propName
 * @param {any} value
 * @returns any
 */
export default function css(elementNode, propName, value) {
  return !value
    ? getStyle(elementNode, propName)
    : setStyle(elementNode, propName, value);
}
