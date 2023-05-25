import { FormEvent } from "react";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PASSWORD_LOST } from "../../api";
import Error from "../Helper/Error";
import Head from "../Helper/Head";

const LoginPasswordLost = () => {
  const { data, loading, error, request } = useFetch();
  const login = useForm();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: location.href.replace("perdeu", "resetar"),
      });
      const { res, json } = await request(url, options);
      console.log(res, json);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Perdeu a senha" description="Perdeu a senha" />

      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input type="text" name="login" label="Email / Usuário" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
  );
};

export default LoginPasswordLost;
