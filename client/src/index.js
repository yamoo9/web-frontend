const app = document.getElementById('app');
const userList = app?.querySelector('.users');
const requestButton = app?.querySelector('.button--call-api');

const handleRequestUsers = () => {
  fetchUsers();
  // fetchUser(3);
};

// eslint-disable-next-line no-unused-vars
const fetchUsers = () => {
  fetch('/api/v1/users')
    .then((response) => response.json())
    .then((users) => renderUserList(users))
    .catch((error) => console.error(error.message));
};

// eslint-disable-next-line no-unused-vars
const fetchUser = (id) => {
  fetch(`/api/v1/users/${id}`)
    .then((response) => response.json())
    .then((user) => renderUser(user))
    .catch((error) => console.error(error.message));
};

const renderUserList = (users) => {
  const userListHtmlString = users.reduce(
    (htmlString, { id, name, job, isAdmin }) =>
      htmlString +
      `
    <li class="user" data-user-id="${id}">
      <ul>
        <li>
          <a href="/users/${id}">
            <strong>${name}</strong>
          </a>
        </li>
        <li><span>${job}</span> | <span>관리자 권한 여부: ${isAdmin.toString()}</span></li>
      </ul>
    </li>
  `.trim(),
    ''
  );
  userList?.insertAdjacentHTML('afterbegin', userListHtmlString);
};

const renderUser = (user) => {
  renderUserList([user]);
};

requestButton?.addEventListener('click', handleRequestUsers);
