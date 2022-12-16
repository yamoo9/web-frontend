export function FormControl(_ref) {
  var id = _ref.id,
    type = _ref.type,
    children = _ref.children;
  var customId = "euid-".concat(id);
  return React.createElement("div", {
    className: "FormControl"
  }, React.createElement("label", {
    htmlFor: customId
  }, children), React.createElement("input", {
    id: customId,
    type: type
  }));
}
FormControl.defaultProps = {
  type: 'text'
};