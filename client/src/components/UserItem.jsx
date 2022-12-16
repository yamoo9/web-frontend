export function UserItem({ id, face, name, job }) {
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
    </li>
  );
}
