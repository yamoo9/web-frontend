var React = globalThis.React,
  ReactDOM = globalThis.ReactDOM;
var RequestButton = function RequestButton() {
  return React.createElement('button', {
    type: 'button',
    className: 'button',
    onClick: function onClick() {
      console.log('React 요소 클릭');
    }
  }, '사용자 ', '정보 ', '요청');
};
var UserList = function UserList() {
  return React.createElement('ul', {
    className: 'users'
  });
};
var App = function App() {
  return React.createElement(React.StrictMode, null, React.createElement(RequestButton), React.createElement(UserList));
};
var container = document.getElementById('root');
var reactDomRoot = ReactDOM.createRoot(container);
reactDomRoot.render(React.createElement(App));