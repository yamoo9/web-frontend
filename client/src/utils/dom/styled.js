export const styled = (
  styleRules /* ['....', '....'] */,
  targetElement /* app */
) => {
  // [ 'color: red;', 'background: gray;' ]
  targetElement.style.cssText = styleRules.reduce(
    (cssCode, ruleCode) => cssCode + ruleCode,
    '' // 초기 값
  );
  return targetElement;
};

/* export const $styled = function (targetElement) {
  return function (styleRules) {
    let cssCode = styleRules.reduce(
      (cssCode, currentRule) => cssCode + currentRule.trim(),
      ''
    );
    targetElement.style.cssText = cssCode;
  };
}; */

export const $styled = (targetElement) => (styleRules) =>
  (targetElement.style.cssText = styleRules.reduce(
    (cssCode, currentRule) => cssCode + currentRule.trim(),
    ''
  ));

// [Vanilla] HTML | JavaScript | CSS (Component X)
// [Framework] React (JSX = JavaScript + XML) + (CSS | JSS(CSS in JS)) (Component)
