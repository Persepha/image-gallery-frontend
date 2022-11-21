import { FC } from "react";

import styles from "./EditMenu.module.css";
import { EditButton } from "./EditButton";
import { DeleteButton } from "./DeleteButton";

export const EditMenu: FC = () => {
  return (
    <div className={styles.editButtons}>
      <EditButton />
      <DeleteButton />
    </div>
  );
};
