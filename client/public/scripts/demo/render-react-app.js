class App extends React.Component {
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
        <UserList />
      </>
    );
  }
}

function FormControl(props /* { id, label, type = 'text' } */) {
  let customId = `euid-${props.id}`;
  return (
    <div className="FormControl">
      <label htmlFor={customId}>{props.children}</label>
      <input id={customId} type={props.type} />
    </div>
  );
}

// 상태를 가지는 컴포넌트 (비즈니스 로직)
// - stateful component
// - container component

// 상태(state, data)를 가지지 않는 컴포넌트 (재사용 하기 용이)
// - stateless component
// - presentational component

function RequestButton(props) {
  function handleClick() {
    // React 답게 생각하기
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="button button--call-api"
    >
      {props.children}
    </button>
  );
}

function UserList(props) {
  return <ul className="users" {...props} />;
}

ReactDOM.createRoot(document.getElementById('react-app')).render(<App />);
