import { UserItem } from './UserItem.js';

export function UserList({ users, onDelete, ...restProps }) {
  return (
    <ul className="Users" {...restProps}>
      {users.map(({ id, name, job, face }) => (
        <UserItem
          key={id}
          id={id}
          name={name}
          job={job}
          face={face}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
