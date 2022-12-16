function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function App() {
  return React.createElement("div", {
    id: "app"
  }, React.createElement(RequestButton, null, "\uC0AC\uC6A9\uC790 \uC815\uBCF4 \uC694\uCCAD"), React.createElement(UserList, null));
}
function RequestButton(props) {
  return React.createElement("button", {
    type: "button",
    className: "button button--call-api"
  }, props.children);
}
function UserList(props) {
  return React.createElement("ul", _extends({
    className: "users"
  }, props));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));