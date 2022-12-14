/**
 * 문서 요소의 스타일 속성 값 반환 함수
 * @param {HTMLElement} elementNode
 * @param {string} propName
 * @returns number
 */
const getStyle = (elementNode, propName) =>
  parseInt(getComputedStyle(elementNode).getPropertyValue(propName), 10);

/**
 * 문서 요소의 스타일 설정 함수
 * @param {HTMLElement} elementNode
 * @param {string} propName
 * @param {any} value
 */
const setStyle = (elementNode, propName, value) => {
  elementNode.style[propName] = value;
};

/**
 * 문서 요소의 스타일 값을 읽거나, 쓸 수 있는 유틸리티 함수
 * @param {HTMLElement} elementNode
 * @param {string} propName
 * @param {any} value
 * @returns any
 */
const css = (elementNode, propName, value) =>
  !value
    ? getStyle(elementNode, propName)
    : setStyle(elementNode, propName, value);

export default css;
