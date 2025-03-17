import { useEffect, useState } from "react";

export const useFetch = (api, id = undefined) => {
  const [isFetched, setIsFetched] = useState(false);
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await api(id);
      const responseData = result.data.response_data;
      if (result.data.response_data) {
        setResponse(responseData);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsFetched(true);
    }
  };

  return { isFetched, response, error };
};
