import { useContextEx01 } from "./Ex01";

const Context = () => {
  const { data, loading } = useContextEx01();
  if (loading) return <div>Carregando...</div>;
  if (!data) return null;
  return (
    <ul>
      <li>Playback: {data?.preferencias.playback}</li>
      <li>Qualidade: {data?.preferencias.qualidade}</li>
      <li>Volume: {data?.preferencias.volume}</li>
    </ul>
  );
};

export default Context;
