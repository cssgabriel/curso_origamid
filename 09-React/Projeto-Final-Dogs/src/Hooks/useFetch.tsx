import React from "react";

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async (url, options) => {
    let res;
    let json;
    try {
      setError("");
      setLoading(true);
      res = await fetch(url, options);
      json = await res.json();
      if (!res.ok) throw new Error(json.statusText);
      return { res, json };
    } catch (err) {
      json = null;
      setError(err.message);
      return { res, json };
    } finally {
      setData(json);
      setLoading(false);
    }
  }, []);

  return {
    data,
    loading,
    error,
    request,
  };
};

export default useFetch;
