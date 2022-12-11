import { FC, useState } from "react";

import { Link } from "react-router-dom";
import cn from "classnames";

import styles from "./Navbar.module.css";
import { NavbarLink } from "./NavbarLink";
import { SearchBar } from "../SearchBar";
import { UserMenu } from "../UserMenu";

export const Navbar: FC = () => {
  const [navVisibility, setNavVisibility] = useState<boolean>(false);

  const navToggleButtonHandler = () => {
    setNavVisibility(!navVisibility);
  };

  return (
    <header className={cn(styles.primaryHeader, styles.row)}>
      <div className={styles.logo}>
        <Link to="/" className={styles.navlinkText}>
          IGallery
        </Link>
      </div>
      <div
        className={cn(styles.burger, {
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
          className={cn(styles.primaryNavigation, styles.row)}
        >
          <li>
            <NavbarLink toRoute="/">home</NavbarLink>
          </li>
          <li>
            <NavbarLink toRoute="users">users</NavbarLink>
          </li>
          <li>
            <NavbarLink toRoute="about">about</NavbarLink>
          </li>
          <li>
            <SearchBar />
          </li>
          <div className={styles.divider}></div>
          <UserMenu />
        </ul>
      </nav>
    </header>
  );
};
