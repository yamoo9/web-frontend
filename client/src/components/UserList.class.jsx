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
    const { loading, error, users } = this.state;

    if (loading) {
      return <div role="alert">로딩 중....</div>;
    }

    if (error) {
      return <div role="alert">오류 발생! {error.message}</div>;
    }

    return (
      <ul className="Users" {...this.props}>
        {users.map(({ id, name, job, face }) => (
          <UserItem key={id} id={id} name={name} job={job} face={face} />
        ))}
      </ul>
    );
  }

  componentDidMount() {
    console.log('mounted userlist component');
    this.fetchUsers();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('updated userlist component');
  }

  componentWillUnmount() {
    console.log('will unmount userlist component');
  }

  async fetchUsers() {
    try {
      // axios library
      const response = await axios.get('/api/v1/users');

      // fetch api
      // const response = await fetch('/api/v1/users');
      // const users = await response.json();

      this.setState({
        users: response.data,
      });
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
