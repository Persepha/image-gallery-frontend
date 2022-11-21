import { FC } from "react";
import styles from "./EditMenu.module.css";
import { Link } from "react-router-dom";

export const DeleteButton: FC = () => {
  return (
    <div className={styles.item}>
      <Link to={"/"} className={styles.iconButton}>
        <svg
          className={styles.icon}
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#F4442E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </Link>
    </div>
  );
};