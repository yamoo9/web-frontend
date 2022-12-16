var _excluded = ["users", "onDelete"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { UserItem } from './UserItem.js';
export function UserList(_ref) {
  var users = _ref.users,
    onDelete = _ref.onDelete,
    restProps = _objectWithoutProperties(_ref, _excluded);
  return React.createElement("ul", _extends({
    className: "Users"
  }, restProps), users.map(function (_ref2) {
    var id = _ref2.id,
      name = _ref2.name,
      job = _ref2.job,
      face = _ref2.face;
    return React.createElement(UserItem, {
      key: id,
      id: id,
      name: name,
      job: job,
      face: face,
      onDelete: onDelete
    });
  }));
}