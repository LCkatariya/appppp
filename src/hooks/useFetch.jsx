import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setData(data);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err);
        }
      }).finally(()=>{
        setLoading(false)
      });

    return () => {
      isMounted = false;
    };
  }, [url]);
console.log('useFetch')
  return { data, loading, error };
}

export default useFetch;
