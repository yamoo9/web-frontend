var app = document.getElementById('app');
var userList = app === null || app === void 0 ? void 0 : app.querySelector('.users');
var requestButton = app === null || app === void 0 ? void 0 : app.querySelector('.button--call-api');
var handleRequestUsers = function handleRequestUsers() {
  fetchUsers();
};
var fetchUsers = function fetchUsers() {
  fetch('/api/v1/users').then(function (response) {
    return response.json();
  }).then(function (users) {
    return renderUserList(users);
  }).catch(function (error) {
    return console.error(error.message);
  });
};
var fetchUser = function fetchUser(id) {
  fetch("/api/v1/users/".concat(id)).then(function (response) {
    return response.json();
  }).then(function (user) {
    return renderUser(user);
  }).catch(function (error) {
    return console.error(error.message);
  });
};
var renderUserList = function renderUserList(users) {
  var userListHtmlString = users.reduce(function (htmlString, _ref) {
    var id = _ref.id,
      name = _ref.name,
      job = _ref.job,
      isAdmin = _ref.isAdmin;
    return htmlString + "\n        <li class=\"user\" data-user-id=\"".concat(id, "\">\n          <ul>\n            <li>\n              <a href=\"/users/").concat(id, "\">\n                <strong>").concat(name, "</strong>\n              </a>\n            </li>\n            <li><span>").concat(job, "</span> | <span>\uAD00\uB9AC\uC790 \uAD8C\uD55C \uC5EC\uBD80: ").concat(isAdmin.toString(), "</span></li>\n          </ul>\n        </li>\n      ").trim();
  }, '');
  userList === null || userList === void 0 ? void 0 : userList.insertAdjacentHTML('afterbegin', userListHtmlString);
};
var renderUser = function renderUser(user) {
  renderUserList([user]);
};
requestButton === null || requestButton === void 0 ? void 0 : requestButton.addEventListener('click', handleRequestUsers);