import {
  UserList,
  FormControl,
  RequestButton,
  PrintUsersCount,
} from './components/index.js';
import { useFetchData } from './hooks/useFetchData.js';

const { useState, useEffect } = React;

export default function App() {
  const {
    loading,
    error,
    data: users,
    update: setUsers,
  } = useFetchData('/api/v1/users');

  const handleDeleteUserItem = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  /* -------------------------------------------------------------------------- */

  const [initialMessage] = useState('초기 렌더링 수행');

  useEffect(() => {
    console.log('udpate initialMessage');
  }, [initialMessage]);

  /* -------------------------------------------------------------------------- */

  /* -------------------------------------------------------------------------- */

  const [count, setCount] = useState(100);
  // this.setState(updater[, callback])

  useEffect(() => {
    console.log('update count', count);
  }, [count]);

  /* -------------------------------------------------------------------------- */

  if (loading) {
    return <div role="alert">로딩 중....</div>;
  }

  if (error) {
    return <div role="alert">오류 발생! {error.message}</div>;
  }

  return (
    <div style={{ maxWidth: 1140, margin: '80px auto' }}>
      <button type="button" onClick={() => setCount(count + 10)}>
        +
      </button>
      <output>
        {count} | {initialMessage}
      </output>
      <button type="button" onClick={() => setCount(count - 10)}>
        -
      </button>

      <PrintUsersCount
        style={{
          position: 'fixed',
          top: 20,
          right: 20,
          fontSize: 48,
          fontWeight: 700,
        }}
      >
        {users.length}
      </PrintUsersCount>

      <div style={{ width: 420 }}>
        <UserList
          aria-label="사용자 목록"
          users={users}
          onDelete={handleDeleteUserItem}
        />
      </div>
    </div>
  );
}
