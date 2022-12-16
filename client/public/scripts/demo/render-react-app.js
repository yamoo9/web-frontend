function App() {
  return (
    <div id="app">
      <RequestButton>사용자 정보 요청</RequestButton>
      <UserList />
    </div>
  );
}

function RequestButton(props) {
  function handleClick() {
    // React 답게 생각하기

    // React 답지 않게 생각하기 (기존 경험 답습)
    // 서버 데이터 요청/응답 ....
    fetchUsers();
  }

  async function fetchUsers() {
    try {
      const response = await fetch('http://localhost:4000/api/v1/users');
      const users = await response.json();
      // DOM 스크립트 → UI 업데이트
      renderUserItems(users);
    } catch (error) {
      console.error(error);
    }
  }

  function renderUserItems(users) {
    const userList = document.querySelector('.users');
    let renderingHtmlString = users.reduce((htmlCode, { name }) => {
      return htmlCode + `<li class="user"><strong>${name}</strong></li>`;
    }, '');
    console.log(renderingHtmlString);
    userList?.insertAdjacentHTML('beforeend', renderingHtmlString);
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

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
