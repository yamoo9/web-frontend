export function UserItem({ id, face, name, job, onDelete }) {
  return (
    <li className="User">
      <a href={`/user/${id}`}>
        <figure className="card">
          <img className="face" src={face} alt="" />
          <figcaption className="info">
            <em className="name">{name}</em>
            <span className="job">{job}</span>
          </figcaption>
        </figure>
      </a>
      <UserItem.DeleteButton
        onClick={() => {
          onDelete(id);
        }}
      >
        삭제
      </UserItem.DeleteButton>
    </li>
  );
}

// Compound Component Pattern
// React.StrictMode
// React.Fragment

UserItem.DeleteButton = function DeleteUserItemButton(props) {
  return <button type="button" className="button--delete" {...props} />;
};
