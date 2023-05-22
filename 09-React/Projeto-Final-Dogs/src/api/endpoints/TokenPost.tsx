import React, { FormEvent } from "react";

const TokenPost = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [token, setToken] = React.useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((json) => {
        console.log(json);
        setToken(json.token);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="username"
        type="text"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <button>Enviar</button>
      <p>{token}</p>
    </form>
  );
};

export default TokenPost;
