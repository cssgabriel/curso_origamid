// import React from 'react'
import styles from "./Button.module.css";
interface PropsButton {
  children: string;
  [key: string]: unknown;
}

const Button = ({ children, ...props }: PropsButton) => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
