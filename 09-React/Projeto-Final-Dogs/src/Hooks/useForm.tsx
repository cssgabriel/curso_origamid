import React, { FormEvent } from "react";

type Type = "email" | "password";
const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um email válido",
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      "A senha deve conter 1 caracter maiúsculo, 1 minúsculo e 1 dígito. Com no mínimo 8 caracteres.",
  },
};

const useForm = (type?: Type) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState("");

  function validate(value: string) {
    if (!type) return true;
    if (value.length) {
      setError("Preencha um valor.");
      return false;
    } else if (types[type] && types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError("");
      return true;
    }
  }

  function onChange({ target }: FormEvent) {
    if (target instanceof HTMLInputElement) {
      if (error) validate(target.value);
      setValue(target.value);
    }
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
