// import React from 'react'
import styles from "./Input.module.css";
interface PropsInput {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler;
  onBlur: React.ChangeEventHandler;
  error: string;
  [key: string]: unknown;
}

const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
  onBlur,
}: PropsInput) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        value={value}
        className={styles.input}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
