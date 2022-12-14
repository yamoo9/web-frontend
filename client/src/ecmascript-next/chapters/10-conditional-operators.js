// -----------------------------------------------------------------------------
// TODO
// -----------------------------------------------------------------------------
// - [ ] 3항 연산 식(터너리), null 병합 연산자, 옵셔널 체이닝을 활용해 코드를 작성합니다.
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Nullish coalescing operator
// -----------------------------------------------------------------------------

const defaultArg = (value, initialValue) => {
  // Ternaries
  // 아래 코드를 3항 연산 식으로 변경합니다.
  if (value === null || value === undefined) {
    return initialValue;
  } else {
    return value;
  }

  // Nullish coalescing operator
  // null 병합 연산자를 사용한 식으로 변경합니다.
};

const ellipsisText = (text, limit) => {
  // 기본 매개변수를 활용해 코드를 변경합니다.
  limit = defaultArg(limit, 100);
  return `${text.slice(0, limit).trim()}...`;
};

// -----------------------------------------------------------------------------
// Optional chaning
// -----------------------------------------------------------------------------

const company = Object.freeze({
  name: 'EUID',
  location: {
    lat: 321,
    lng: -39,
  },
  getLocation() {
    return Object.values(company.location);
  },
});


// ------------------------------------------------------------------------------
// TEST
// ------------------------------------------------------------------------------
// - [ ] Jest 테스트 러너를 구동한 후, 테스트가 성공하도록 함수 로직을 구성합니다.
// ------------------------------------------------------------------------------

let companyName, companyLat;

// describe('company 테스트', () => {
//   test('company.companyName은 존재하지 않으므로 undefined 입니다.', () => {
//     // 옵셔널 체이닝 코드를 활용해봅니다.
//     if ('companyName' in company) {
//       companyName = company.companyName;
//     }

//     expect(companyName).not.toBeDefined();
//   });

//   test('companyLat 값은 321입니다.', () => {
//     // 옵셔널 체이닝 코드를 활용해봅니다.
//     if ('location' in company) {
//       if ('lat' in company.location) {
//         companyLat = company.location.lat;
//       }
//     }

//     expect(companyLat).toBe(321);
//   });

//   test('company.getFoundingDate는 함수 타입이 아니므로 실행할 수 없어 undefined 입니다.', () => {
//     // 옵셔널 체이닝 코드를 활용해봅니다.
//     if ('getFoundingDate' in company) {
//       if (typeof company.getFoundingDate === 'function') {
//         company.getFoundingDate();
//       }
//     }

//     expect(company.getFoundingDate()).toBeUndefined();
//   });

//   test('company.getLocation 타입은 함수이므로 조건 처리 결과 실행 가능합니다. 반환 값은 [321, -39] 입니다.', () => {
//     // 옵셔널 체이닝 코드를 활용해봅니다.
//     if ('getLocation' in company) {
//       if (typeof company.getLocation === 'function') {
//         company.getLocation();
//       }
//     }

//     expect(company.getLocation()).toStrictEqual([321, -39]);
//   });
// });
