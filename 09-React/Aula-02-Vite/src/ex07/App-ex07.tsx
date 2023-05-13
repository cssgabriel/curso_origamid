import React from "react";
// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Essa é a função utilizado para realizar o POST
// fetch('https://ranekapi.origamid.dev/json/api/usuario', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   // form é o objeto com os dados do formulário
//   body: JSON.stringify(form),
// });

// Mostre uma mensagem na tela, caso a resposta da API seja positiva

const App = () => {
  const [response, setResponse] = React.useState<null | Response>(null);

  const [form, setForm] = React.useState({
    nome: "",
    email: "",
    senha: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  async function handleSubmit(e: any) {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://ranekapi.origamid.dev/json/api/usuario",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );
      console.log(form);
      setResponse(response);
    } catch (err) {
      console.error(err);
    }
  }

  function handleChange({ target }: any) {
    const id = target.id;
    setForm({ ...form, [id]: target.value });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">nome</label>
        <input
          required
          onChange={handleChange}
          type="text"
          name="nome"
          id="nome"
        />
        <label htmlFor="email">email</label>
        <input
          required
          onChange={handleChange}
          type="email"
          name="email"
          id="email"
        />
        <label htmlFor="senha">senha</label>
        <input
          required
          onChange={handleChange}
          type="password"
          name="senha"
          id="senha"
        />
        <label htmlFor="cep">cep</label>
        <input
          required
          onChange={handleChange}
          type="text"
          name="cep"
          id="cep"
        />
        <label htmlFor="rua">rua</label>
        <input
          required
          onChange={handleChange}
          type="text"
          name="rua"
          id="rua"
        />
        <label htmlFor="numero">numero</label>
        <input
          required
          onChange={handleChange}
          type="text"
          name="numero"
          id="numero"
        />
        <label htmlFor="bairro">bairro</label>
        <input
          required
          onChange={handleChange}
          type="text"
          name="bairro"
          id="bairro"
        />
        <label htmlFor="cidade">cidade</label>
        <input
          required
          onChange={handleChange}
          type="text"
          name="cidade"
          id="cidade"
        />
        <label htmlFor="estado">estado</label>
        <input
          required
          onChange={handleChange}
          type="text"
          name="estado"
          id="estado"
        />
        <button>Enviar</button>
        {response?.ok && <p>Usuário cadastrado com sucesso!</p>}
      </form>
    </>
  );
};

export default App;
