import { FC } from "react";

import styles from "./EditMenu.module.css";
import { EditButton } from "./EditButton";
import { DeleteButton } from "./DeleteButton";
import { EditMenuProps } from "./EditMenu.props";

export const EditMenu: FC<EditMenuProps> = ({ slug }) => {
  return (
    <div className={styles.editButtons}>
      <EditButton slug={slug} />
      <DeleteButton slug={slug} />
    </div>
  );
};
