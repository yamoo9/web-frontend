const { React, ReactDOM } = globalThis;

// React Element
// type="button" class="button button--call-api"

// 컴포넌트 - 리액트 요소 재사용

const RequestButton = () =>
  React.createElement(
    'button',
    {
      type: 'button',
      className: 'button',
      onClick() {
        // console.log('clicked react element button');
      },
    },
    '사용자 ',
    '정보 ',
    '요청'
  );

// <ul class="users"></ul>
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

// console.log(requestButton);
// console.log(userList);

// ReactDOMRoot Object
const container = document.getElementById('root');
const reactDomRoot = ReactDOM.createRoot(container);
reactDomRoot.render(React.createElement(App));
