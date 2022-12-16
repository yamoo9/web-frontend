export function RequestButton(props) {
  function handleClick() {
    // React 답게 생각하기
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="button button--call-api"
    >
      {props.children}
    </button>
  );
}
