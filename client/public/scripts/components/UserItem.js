function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
export function UserItem(_ref) {
  var id = _ref.id,
    face = _ref.face,
    name = _ref.name,
    job = _ref.job,
    onDelete = _ref.onDelete;
  return React.createElement("li", {
    className: "User"
  }, React.createElement("a", {
    href: "/user/".concat(id)
  }, React.createElement("figure", {
    className: "card"
  }, React.createElement("img", {
    className: "face",
    src: face,
    alt: ""
  }), React.createElement("figcaption", {
    className: "info"
  }, React.createElement("em", {
    className: "name"
  }, name), React.createElement("span", {
    className: "job"
  }, job)))), React.createElement(UserItem.DeleteButton, {
    onClick: function onClick() {
      onDelete(id);
    }
  }, "\uC0AD\uC81C"));
}
UserItem.DeleteButton = function DeleteUserItemButton(props) {
  return React.createElement("button", _extends({
    type: "button",
    className: "button--delete"
  }, props));
};