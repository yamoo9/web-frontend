import { UserItem } from './UserItem.js';

export class UserList extends React.Component {
  state = {
    loading: true,
    error: null,
    users: [],
  };

  // Commit Phase
  // Side Effects
  // 서버 요청 / 응답 (대기 중...)
  // 응답 성공 : 데이터 업데이트, 로딩 상태 업데이트
  // 응답 실패 : 에러 업데이트, 로딩 상태 업데이트
  // 이벤트 청취(구독), 해제
  // Lifecycle Methods
  // - componentDidMount
  // - componentDidUpdate
  // - componentWillUnmount

  render() {
    if (this.state.loading) {
      return <div role="alert">로딩 중....</div>;
    }

    if (this.state.error) {
      return <div role="alert">오류 발생! {this.state.error.message}</div>;
    }

    return (
      <ul className="Users" {...this.props}>
        {this.state.users.map(({ id, name, job, face }) => (
          <UserItem key={id} id={id} name={name} job={job} face={face} />
        ))}
      </ul>
    );
  }

  componentDidMount() {
    setTimeout(() => {
      this.fetchUsers();
    }, 2000);
  }

  async fetchUsers() {
    try {
      // axios library
      // const { data: users } = await axios.get('/api/v1/users');

      const response = await fetch('/api/v1/users');
      const users = await response.json();

      this.setState(
        {
          users,
        },
        () => {
          console.log('updated users data from backend');
        }
      );
    } catch (error) {
      this.setState({
        error,
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }
}
