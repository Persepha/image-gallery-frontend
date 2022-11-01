import { FC, useState } from "react";

import classnames from "classnames";

import styles from "./Navbar.module.css";

export const Navbar: FC = () => {
  const [navVisibility, setNavVisibility] = useState<boolean>(false);

  const navToggleButtonHandler = () => {
    setNavVisibility(!navVisibility);
  };

  return (
    <header className={classnames(styles.primaryHeader, styles.row)}>
      <div className={styles.logo}>IG</div>
      <div
        className={classnames(styles.burger, {
          [styles.burgerActive]: navVisibility,
        })}
        aria-controls="primary-navigation"
        aria-expanded={navVisibility}
        onClick={navToggleButtonHandler}
      >
        <span className={styles.srOnly}>Menu</span>
        <i></i>
      </div>
      <nav>
        <ul
          id="primary-navigation"
          data-visible={navVisibility}
          className={classnames(styles.primaryNavigation, styles.row)}
        >
          <li className={styles.active}>home</li>
          <li>test</li>
        </ul>
      </nav>
    </header>
  );
};
