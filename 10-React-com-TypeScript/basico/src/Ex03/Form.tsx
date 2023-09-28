import Input from "./Input";
import React from "react";

type FormProps = React.ComponentProps<"form"> & {
  setData: React.Dispatch<React.SetStateAction<DataAPI[] | null>>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
};

const Form = ({ setData, setError }: FormProps) => {
  const [inicio, setInicio] = React.useState("");
  const [final, setFinal] = React.useState("");

  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!(inicio && final)) return;
    try {
      const res = await fetch(
        `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`
      );
      if (!res.ok) throw new Error();
      const json = (await res.json()) as DataAPI[];
      setData(json);
    } catch (err) {
      setError(true);
      console.error(err);
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <Input label="inicio" type="date" value={inicio} setState={setInicio} />
      <Input label="fim" type="date" value={final} setState={setFinal} />
      <button style={{ marginTop: "1rem" }} type="submit">
        Enviar
      </button>
    </form>
  );
};

export default Form;
