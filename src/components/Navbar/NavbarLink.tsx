import { FC, ReactNode } from "react";

import { NavLink } from "react-router-dom";
import classnames from "classnames";

import styles from "./Navbar.module.css";

interface NavbarLinkProps {
  toRoute: string;
  children: ReactNode;
}

export const NavbarLink: FC<NavbarLinkProps> = ({ toRoute, children }) => {
  return (
    <NavLink
      to={toRoute}
      className={({ isActive }) =>
        isActive
          ? classnames(styles.hoverAnimation, styles.navlinkText, styles.active)
          : classnames(styles.hoverAnimation, styles.navlinkText)
      }
    >
      {children}
    </NavLink>
  );
};
