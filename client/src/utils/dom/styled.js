export const styled = (styleRules, targetElement) => {
  targetElement.style.cssText = styleRules.reduce(
    (cssCode, ruleCode) => cssCode + ruleCode,
    ''
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
