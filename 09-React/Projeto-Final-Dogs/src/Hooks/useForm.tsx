import React, { FormEvent } from "react";

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um email válido",
  },
};

const useForm = (type?: string) => {
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
