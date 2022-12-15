import { styled, $styled } from '../utils/dom/styled.js';

const { body } = document;
const app = document.getElementById('app');
const updateStyledButton = app?.querySelector('.button--update-styled');

// CSS in JS…
// Template Literals => Tagged Template

updateStyledButton?.addEventListener('click', (e) => {
  styled`
    ${app}
    padding: 20px;
    border: 4px solid rgba(124 124 124 / 20%);
    box-shadow: 0 4px 10px rgba(32 32 32 / 34%);
  `;
});

// Array.prototype.reduce 메서드 정리

// 역 따옴표(``)를 사용한 함수 호출  정리
