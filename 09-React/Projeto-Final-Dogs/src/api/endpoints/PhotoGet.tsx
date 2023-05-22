import { FormEvent } from "react";

const PhotoGet = () => {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    fetch("https://dogsapi.origamid.dev/json/api/photo")
      .then((res) => res.json())
      .then((json) => json);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button>Enviar</button>
    </form>
  );
};

export default PhotoGet;
