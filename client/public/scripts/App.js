function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { UserList, FormControl, RequestButton, PrintUsersCount } from './components/index.js';
import { useFetchData } from './hooks/useFetchData.js';
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect;
export default function App() {
  var _useFetchData = useFetchData('/api/v1/users'),
    loading = _useFetchData.loading,
    error = _useFetchData.error,
    users = _useFetchData.data,
    setUsers = _useFetchData.update;
  var handleDeleteUserItem = function handleDeleteUserItem(id) {
    var updatedUsers = users.filter(function (user) {
      return user.id !== id;
    });
    setUsers(updatedUsers);
  };
  var _useState = useState('초기 렌더링 수행'),
    _useState2 = _slicedToArray(_useState, 1),
    initialMessage = _useState2[0];
  useEffect(function () {
    console.log('udpate initialMessage');
  }, [initialMessage]);
  var _useState3 = useState(100),
    _useState4 = _slicedToArray(_useState3, 2),
    count = _useState4[0],
    setCount = _useState4[1];
  useEffect(function () {
    console.log('update count', count);
  }, [count]);
  if (loading) {
    return React.createElement("div", {
      role: "alert"
    }, "\uB85C\uB529 \uC911....");
  }
  if (error) {
    return React.createElement("div", {
      role: "alert"
    }, "\uC624\uB958 \uBC1C\uC0DD! ", error.message);
  }
  return React.createElement("div", {
    style: {
      maxWidth: 1140,
      margin: '80px auto'
    }
  }, React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setCount(count + 10);
    }
  }, "+"), React.createElement("output", null, count, " | ", initialMessage), React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setCount(count - 10);
    }
  }, "-"), React.createElement(PrintUsersCount, {
    style: {
      position: 'fixed',
      top: 20,
      right: 20,
      fontSize: 48,
      fontWeight: 700
    }
  }, users.length), React.createElement("div", {
    style: {
      width: 420
    }
  }, React.createElement(UserList, {
    "aria-label": "\uC0AC\uC6A9\uC790 \uBAA9\uB85D",
    users: users,
    onDelete: handleDeleteUserItem
  })));
}