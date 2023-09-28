/*
Crie um custom hook chamado useFetch.

1 - Este hook deve retornar a interface:
interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

Onde T é um valor genérico que deverá ser passado quando o Hook for utilizado.
2 - data, loading e error são estados reativos (useState).
3 - O hook deve receber a URL e OPTIONS como argumentos (interfaces de fetch).
4 - O fetch deve ocorrer em um useEffect, com dependência apenas da URL.
5 - Use AbortController para abortar o fetch caso o componente desmonte, antes do fetch ser concluído.
6 - Teste o Hook com a api: https://data.origamid.dev/produtos

*/
import React from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

function useFetch<T>(URL: string, OPTIONS: RequestInit): FetchState<T> {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    async () => {
      try {
        const res = await fetch(URL, OPTIONS);
        setLoading(true);
        if (!res.ok) throw new Error();
        const json = (await res.json()) as T;
        setData(json);
      } catch (err) {
        if (err instanceof Error) setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    return console.log("abortou");
  }, [URL]);

  return {
    data: data,
    loading: loading,
    error: error,
  };
}

export default useFetch;
