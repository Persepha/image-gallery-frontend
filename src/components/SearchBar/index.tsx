import { FC } from "react";

import styles from "./SearchBar.module.css";

export const SearchBar: FC = () => {
  return (
    <div className={styles.searchGroup}>
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
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <input type="search" placeholder="Search" className={styles.input} />
    </div>
  );
};
