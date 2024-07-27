import { useRequest } from './hooks/use-request';
import { fetcher } from './api';

function App() {
  const { data, loading, error } = useRequest(fetcher);
  if (loading) return 'loading...';
  if (error) return `error:${error}`;
  return (
    <div>
      <button>fetch data</button>
      {data ? <p>{JSON.stringify(data, null, 2)}</p> : null}
    </div>
  );
}

export default App;
