import { UserItem } from './UserItem.js';

export function UserList(props) {
  const users = [
    {
      id: '1',
      name: '이철규',
      job: '야구 선수',
      face: 'https://raw.githubusercontent.com/yamoo9/assets/master/images/faces/man/03.jpg',
      isAdmin: false,
    },
    {
      id: '2',
      name: '슬비',
      job: '레크레이션 강사',
      face: 'https://raw.githubusercontent.com/yamoo9/assets/master/images/faces/woman/05.jpg',
      isAdmin: true,
    },
    {
      id: '3',
      name: '현기',
      job: '회계사',
      face: 'https://raw.githubusercontent.com/yamoo9/assets/master/images/faces/man/04.jpg',
      isAdmin: false,
    },
  ];

  // JSX -> style prop (not string, using css map object) : px 단위 X
  // Sass -> 컴포넌트 스타일 (Sass 문법, 중첩 규칙, 변수 등 활용, 모듈 함수)

  return (
    <ul className="Users" {...props}>
      {users.map(({ id, name, job, face }) => (
        <UserItem key={id} id={id} name={name} job={job} face={face} />
      ))}
    </ul>
  );
}
