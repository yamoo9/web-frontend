import {
  UserList,
  FormControl,
  RequestButton,
  PrintUsersCount,
} from './components/index.js';

// Props(Read Only) vs. State(Read Write)

export default class App extends React.Component {
  state = {
    loading: false,
    error: null,
    users: [],
    isRenderUserList: true,
    checked: true,
    email: {
      id: 'user-email',
      label: '이메일',
      type: 'email',
      value: '',
    },
    password: {
      id: 'user-pass',
      label: '패스워드',
      type: 'password',
      value: '',
    },
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: {
        ...this.state[name],
        value,
      },
    });
  };

  handleDeleteUserItem = (id) => {
    this.setState({
      users: this.state.users.filter((user) => user.id !== id),
    });
  };

  render() {
    const { email, password, users, isRenderUserList, loading, error } =
      this.state;

    if (loading) {
      return <div role="alert">로딩 중....</div>;
    }

    if (error) {
      return <div role="alert">오류 발생! {error.message}</div>;
    }

    return (
      <div style={{ maxWidth: 1140, margin: '80px auto' }}>
        <div hidden style={{ display: 'flex', gap: 20 }}>
          <input
            type="checkbox"
            checked={this.state.checked}
            onChange={this.handleChange}
          />
          <input
            type="checkbox"
            onChange={(e) => {
              console.log(e.target);
              console.log(e.target.checked);
            }}
          />
        </div>

        <div style={{ margin: '40px 0' }}>
          <FormControl
            name="email"
            id={email.id}
            type={email.type}
            value={email.value}
            onChange={this.handleChange}
          >
            {email.label}
          </FormControl>

          <FormControl
            name="password"
            id={password.id}
            type={password.type}
            value={password.value}
            onChange={this.handleChange}
          >
            {password.label}
          </FormControl>
        </div>

        <RequestButton>사용자 정보 요청</RequestButton>

        <button
          type="button"
          onClick={() => {
            this.setState(({ isRenderUserList }) => ({
              isRenderUserList: !isRenderUserList,
            }));
          }}
        >
          UserList 렌더링 여부: {this.state.isRenderUserList ? 'OK' : 'NO'}
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
          {isRenderUserList && (
            <UserList
              users={users}
              aria-label="사용자 목록"
              onDelete={this.handleDeleteUserItem}
            />
          )}
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.fetchUsers();
  }

  async fetchUsers() {
    this.setState({
      loading: true,
    });

    try {
      const { data } = await axios.get('/api/v1/users');
      this.setState({
        users: data,
        loading: false,
      });
    } catch (error) {
      this.setState({
        error,
        loading: false,
      });
    }
  }
}
