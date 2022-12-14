// -----------------------------------------------------------------------------
// TODO
// -----------------------------------------------------------------------------
// - [ ] 유틸리티 함수문 → 화살표 함수로 변경한 후, 모듈 내보내는 구문을 추가합니다.
// - [ ] 템플릿 리터럴 구문을 사용해 데이터 바인딩 되도록 코드를 수정합니다.
// -----------------------------------------------------------------------------

function renderCard(card) {
  return (
    '<div class="card">\
      <img src="' + card.image.src + '" class="card-img-top" alt="' + card.image.alt + '" />\
      <div class="card-body">\
        <h5 class="card-title">' + card.title + '</h5>\
        <p class="card-text">' + card.description + '</p>\
        <a href="' + card.link.href + '" class="btn btn-primary">' + card.link.text + '</a>\
      </div>\
    </div>\
    '
  );
}

function joinLine(string) {
  return string.replace(/\s*\n\s*/g, '');
}


// ------------------------------------------------------------------------------
// TEST                                                                      
// ------------------------------------------------------------------------------
// - [ ] Jest 테스트 러너를 구동한 후, 테스트가 성공하도록 함수 로직을 구성합니다.
// ------------------------------------------------------------------------------

// test('renderCard 렌더 유틸리티', () => {
//   const data = {
//     title: 'React 펀드멘탈',
//     description:
//       'React 애플리케이션 및 라이브러리를 빌드하는 데 필요한 기본 개념을 배웁니다.',
//     image: {
//       src: 'react-fundamentals.webp',
//       alt: 'React Fundamentals',
//     },
//     link: {
//       href: '/react-fundamentals',
//       text: 'React fundamentals',
//     },
//   };

//   const received = renderCard(data);

//   const expected = /* html */`
//     <div class="card">
//       <img src="react-fundamentals.webp" class="card-img-top" alt="React Fundamentals" />
//       <div class="card-body">
//         <h5 class="card-title">React 펀드멘탈</h5>
//         <p class="card-text">React 애플리케이션 및 라이브러리를 빌드하는 데 필요한 기본 개념을 배웁니다.</p>
//         <a href="/react-fundamentals" class="btn btn-primary">React fundamentals</a>      
//       </div>    
//     </div>
//   `;

//   expect(joinLine(received)).toHaveLength(joinLine(expected).length);
// });