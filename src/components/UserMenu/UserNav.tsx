import { FC } from "react";
import { NavbarButton } from "../NavbarButton";
import { useAppDispatch } from "../../hooks/redux";
import { logout } from "../../redux/auth/actionCreators";

import styles from "./UserMenu.module.css";
import { Link } from "react-router-dom";

export const UserNav: FC = () => {
  const dispatch = useAppDispatch();

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <>
      <li className={styles.item}>
        <Link to={"/images/create/"} className={styles.iconButton}>
          <svg
            className={styles.icon}
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </Link>
      </li>
      <li>
        <NavbarButton onClick={handleLogout}>Logout</NavbarButton>
      </li>
    </>
  );
};
