import { FC } from "react";

import styles from "./Image.module.css";
import { ImageProps } from "./Image.props";

export const Image: FC<ImageProps> = ({ url, name }) => {
  return (
    <div className={styles.image}>
      <img src={url} alt={name} />
    </div>
  );
};
