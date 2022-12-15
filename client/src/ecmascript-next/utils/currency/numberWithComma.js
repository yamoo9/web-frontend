// numberWithComma 함수를 "기본 내보내기"로 내보냅니다.

// const numberWithComma = (n) =>
//   n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

// export default numberWithComma;

/**
 * 숫자 값을 통화 값으로 변경하는 유틸리티 함수
 * @param {number} n
 * @returns string
 */
export default function numberWitComma(n) {
  return n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}
