export function RequestButton(props) {
  function handleClick() {}
  return React.createElement("button", {
    type: "button",
    onClick: handleClick,
    className: "button button--call-api"
  }, props.children);
}