const styled = (styleRules, targetElement) => {
  targetElement.style.cssText = styleRules.reduce(
    (cssCode, ruleCode) => cssCode + ruleCode,
    ''
  );
  return targetElement;
};

const app = document.getElementById('app');
const updateStyledButton = app?.querySelector('.button--update-styled');

updateStyledButton?.addEventListener('click', (e) => {
  styled`
    ${app}
    padding: 20px;
    border: 4px solid rgba(124 124 124 / 20%);
  `;
});
