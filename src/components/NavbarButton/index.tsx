import { FC } from "react";

import styles from "./NavbarButton.module.css";
import { NavbarButtonProps } from "./NavbarButton.props";

export const NavbarButton: FC<NavbarButtonProps> = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};
