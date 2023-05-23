// import React from 'react'
import styles from "./Input.module.css";
interface PropsInput {
  label: string;
  type: string;
  name: string;
}

const Input = ({ label, type, name }: PropsInput) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input id={name} name={name} className={styles.input} type={type} />
      <p className={styles.error}>Erro</p>
    </div>
  );
};

export default Input;
