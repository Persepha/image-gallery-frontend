import { FC } from "react";
import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";

export const Button: FC<ButtonProps> = ({ ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {props.children}
    </button>
  );
};
