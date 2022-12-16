import { FormControl, RequestButton, UserList } from './components/index.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
    };
  }

  render() {
    return (
      <>
        <FormControl id={this.state.email.id} type={this.state.email.type}>
          {this.state.email.label}
        </FormControl>
        <FormControl
          id={this.state.password.id}
          type={this.state.password.type}
        >
          {this.state.password.label}
        </FormControl>
        <RequestButton>사용자 정보 요청</RequestButton>
        <div style={{ width: 420 }}>
          <UserList aria-label="사용자 목록" />
        </div>
      </>
    );
  }
}
