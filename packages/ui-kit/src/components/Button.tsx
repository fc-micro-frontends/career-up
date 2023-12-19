import React from "react";
import styles from "./Button.module.css";

type ButtonProps = React.PropsWithChildren<{
  onClick?: () => void;
}>;

const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
  <button className={styles.btn} onClick={onClick}>
    {children}
  </button>
);

export default Button;
