export function FormControl({ type, children, ...restProps }) {
  const id = React.useId();
  let uniqueId = `euid-${id}`;

  return (
    <div className="FormControl">
      <label htmlFor={uniqueId}>{children}</label>
      <input id={uniqueId} type={type} {...restProps} />
    </div>
  );
}

FormControl.defaultProps = {
  type: 'text',
};
