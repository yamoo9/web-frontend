const renderCard = (card) => /* html */ `
  <div class="card">
    <img src="${card.image.src}" class="card-img-top" alt="${card.image.alt}" />
    <div class="card-body">
      <h5 class="card-title">${card.title}</h5>
      <p class="card-text">${card.description}</p>
      <a href="${card.link.href}" class="btn btn-primary">${card.link.text}</a>      
    </div>    
  </div>
  `;

const renderInDocument = () => {
  let cardString = renderCard({
    title: 'React 펀드멘탈',
    description:
      'React 애플리케이션 및 라이브러리를 빌드하는 데 필요한 기본 개념을 배웁니다.',
    image: {
      src: 'react-fundamentals.webp',
      alt: 'React Fundamentals',
    },
    link: {
      href: '/react-fundamentals',
      text: 'React fundamentals',
    },
  });

  app?.insertAdjacentHTML('beforeend', cardString);
};

const app = document.getElementById('app');
const renderCardButton = app.querySelector('.button--renderCard');

renderCardButton?.addEventListener('click', (e) => {
  renderInDocument();
  // e.target.disabled = true;
  e.target.setAttribute('disabled', true);
  // e.target.hidden = true;
  // e.target.setAttribute('hidden', true);
});
