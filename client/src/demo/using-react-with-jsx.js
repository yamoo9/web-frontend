function App() {
  return (
    <div id="app">
      <RequestButton>사용자 정보 요청</RequestButton>
      <UserList />
    </div>
  );
}

function RequestButton(props) {
  return (
    <button type="button" className="button button--call-api">
      {props.children}
    </button>
  );
}

function UserList(props) {
  return <ul className="users" {...props} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
