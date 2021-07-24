import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    fetch(url, { signal: abortController.signal })
      .then((res) => {
        if (!res.ok)
          throw new Error(`Unable to fetch data. Status Code: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setData(data.data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortFetch") console.log("fetch aborted!");
        else {
          setError(err.message);
          setIsPending(false);
        }
      });
    return () => abortController.abort();
  }, [url]);

  return { data, error, isPending };
};

export default useFetch;
