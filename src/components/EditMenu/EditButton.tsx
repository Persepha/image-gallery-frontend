import { FC } from "react";
import styles from "./EditMenu.module.css";
import { Link } from "react-router-dom";

export const EditButton: FC = () => {
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
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
          <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
        </svg>
      </Link>
    </div>
  );
};
