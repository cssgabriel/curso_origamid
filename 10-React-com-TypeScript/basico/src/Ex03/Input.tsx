import React from "react";

type InputProps = React.ComponentProps<"input"> & {
  label: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
};

function checkDate(date: string) {
  const [y, m, d] = date.split("-");
  if (y && m && d) return true;
  else return false;
}

const Input = ({ label, setState, ...props }: InputProps) => {
  const [error, setError] = React.useState(false);

  function blurHandler(e: React.FocusEvent<HTMLInputElement, Element>) {
    const { value } = e.currentTarget;
    if (!checkDate(value)) setError(true);
    else setError(false);
  }

  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        style={{ borderColor: error ? "red" : "" }}
        type="text"
        id={label}
        name={label}
        {...props}
        onBlur={blurHandler}
        onChange={({ currentTarget }) => setState(currentTarget.value)}
      />
    </div>
  );
};

export default Input;
