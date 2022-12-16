// Controlled Component (2-way)

export function FormControl({ id, type, children }) {
  let customId = `euid-${id}`;

  return (
    <div className="FormControl">
      <label htmlFor={customId}>{children}</label>
      <input id={customId} type={type} />
    </div>
  );
}

FormControl.defaultProps = {
  type: 'text',
};
