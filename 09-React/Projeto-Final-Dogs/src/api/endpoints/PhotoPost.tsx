import React, { FormEvent } from "react";

const PhotoPost = () => {
  const [token, setToken] = React.useState("");
  const [nome, setNome] = React.useState("");
  const [peso, setPeso] = React.useState("");
  const [idade, setIdade] = React.useState("");
  const [img, setImg] = React.useState<File | null>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const formData = new FormData();
    if (img) formData.append("img", img);
    formData.append("nome", nome);
    formData.append("idade", idade);
    formData.append("peso", peso);

    fetch("https://dogsapi.origamid.dev/json/api/user", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((json) => {
        console.log(json);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="token"
        type="text"
        value={token}
        onChange={({ target }) => setToken(target.value)}
      />
      <input
        placeholder="nome"
        type="text"
        value={nome}
        onChange={({ target }) => setNome(target.value)}
      />
      <input
        placeholder="peso"
        type="text"
        value={peso}
        onChange={({ target }) => setPeso(target.value)}
      />
      <input
        placeholder="idade"
        type="text"
        value={idade}
        onChange={({ target }) => setIdade(target.value)}
      />
      <input
        type="file"
        onChange={({ target }) => target.files && setImg(target.files[0])}
      />
      <button>Enviar</button>
    </form>
  );
};

export default PhotoPost;
