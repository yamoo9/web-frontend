export function FormControl({ id, type, children, ...restProps }) {
  let customId = `euid-${id}`;

  return (
    <div className="FormControl">
      <label htmlFor={customId}>{children}</label>
      <input id={customId} type={type} {...restProps} />
    </div>
  );
}

FormControl.defaultProps = {
  type: 'text',
};
