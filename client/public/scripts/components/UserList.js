function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { UserItem } from './UserItem.js';
export function UserList(props) {
  var users = [{
    id: '1',
    name: '이철규',
    job: '야구 선수',
    face: 'https://raw.githubusercontent.com/yamoo9/assets/master/images/faces/man/03.jpg',
    isAdmin: false
  }, {
    id: '2',
    name: '슬비',
    job: '레크레이션 강사',
    face: 'https://raw.githubusercontent.com/yamoo9/assets/master/images/faces/woman/05.jpg',
    isAdmin: true
  }, {
    id: '3',
    name: '현기',
    job: '회계사',
    face: 'https://raw.githubusercontent.com/yamoo9/assets/master/images/faces/man/04.jpg',
    isAdmin: false
  }];
  return React.createElement("ul", _extends({
    className: "Users"
  }, props), users.map(function (_ref) {
    var id = _ref.id,
      name = _ref.name,
      job = _ref.job,
      face = _ref.face;
    return React.createElement(UserItem, {
      key: id,
      id: id,
      name: name,
      job: job,
      face: face
    });
  }));
}