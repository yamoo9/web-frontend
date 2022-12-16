import { useFetchData } from './hooks/useFetchData.js';
import { FormControl } from './components/index.js';

export default function Demo() {
  const { loading, error, data, update } = useFetchData('/api/v1/users/2');

  return (
    <div>
      <h2>Demo</h2>
      <FormControl type="text" children="안녕" />
    </div>
  );
}
