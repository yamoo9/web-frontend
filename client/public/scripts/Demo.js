import { useFetchData } from './hooks/useFetchData.js';
import { FormControl } from './components/index.js';
export default function Demo() {
  var _useFetchData = useFetchData('/api/v1/users/2'),
    loading = _useFetchData.loading,
    error = _useFetchData.error,
    data = _useFetchData.data,
    update = _useFetchData.update;
  return React.createElement("div", null, React.createElement("h2", null, "Demo"), React.createElement(FormControl, {
    type: "text",
    children: "\uC548\uB155"
  }));
}