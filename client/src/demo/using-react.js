const { React, ReactDOM } = globalThis;

// React 컴포넌트(Component) - 요소(Element) 생성 → 재사용

const RequestButton = () =>
  React.createElement(
    'button',
    {
      type: 'button',
      className: 'button',
      onClick() {
        console.log('React 요소 클릭');
      },
    },
    '사용자 ',
    '정보 ',
    '요청'
  );

const UserList = () =>
  React.createElement('ul', {
    className: 'users',
  });

const App = () =>
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(RequestButton), // 리액트 컴포넌트 → 요소 생성
    React.createElement(UserList)
  );

const container = document.getElementById('root');
const reactDomRoot = ReactDOM.createRoot(container);
reactDomRoot.render(React.createElement(App));
