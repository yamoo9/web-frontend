import { FormControl, RequestButton, UserList } from './components/index.js';

// Props(Read Only) vs. State(Read Write)

export default class App extends React.Component {
  state = {
    isRenderUserList: true,
    email: {
      id: 'user-email',
      label: '이메일',
      type: 'email',
    },
    password: {
      id: 'user-pass',
      label: '패스워드',
      type: 'password',
    },
    checked: true,
  };

  handleChange = (e) => {
    console.log(e.target);

    this.setState({
      checked: !this.state.checked,
    });
  };

  render() {
    return (
      <div style={{ maxWidth: 1140, margin: '80px auto' }}>
        <div style={{ display: 'flex', gap: 20 }}>
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

        {/* <FormControl id={this.state.email.id} type={this.state.email.type}>
          {this.state.email.label}
        </FormControl> */}

        {/* <FormControl
          id={this.state.password.id}
          type={this.state.password.type}
        >
          {this.state.password.label}
        </FormControl> */}

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

        <div style={{ width: 420 }}>
          {this.state.isRenderUserList && <UserList aria-label="사용자 목록" />}
        </div>
      </div>
    );
  }
}
