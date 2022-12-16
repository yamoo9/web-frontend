export function UserItem(_ref) {
  var id = _ref.id,
    face = _ref.face,
    name = _ref.name,
    job = _ref.job;
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
  }, job)))));
}