import { useState, useEffect } from 'react';

function reusableLoadPromise() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData()
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {data ? <p>{data.message}</p> : <p>Loading...</p>}
    </div>
  );
}
