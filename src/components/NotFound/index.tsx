import { FC } from "react";

import styles from "./NotFound.module.css";

export const NotFound: FC = () => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>404</span>
      <span className={styles.text}>Content not found</span>
    </div>
  );
};
