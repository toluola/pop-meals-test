import { useState, useEffect } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setLoading(false);
        setData(res);
        setData(res);
      })
      .catch(err => {
        setLoading(false)
        setError(err.message)
      })
  }, [url])

  return { data, loading, error }
}