import { FC } from "react";

import { Link } from "react-router-dom";
import cn from "classnames";

import styles from "./EditMenu.module.css";

export const CreateButton: FC = () => {
  return (
    <Link to={"/images/create/"} className={cn(styles.item, styles.createItem)}>
      <div className={styles.iconButton}>
        <svg
          className={cn(styles.icon, styles.createIcon)}
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
      </div>
    </Link>
  );
};
