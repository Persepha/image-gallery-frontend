import { FC } from "react";

import styles from "./Image.module.css";
import { ImageProps } from "./Image.props";
import { Link } from "react-router-dom";
import { EditMenu } from "../EditMenu";

export const Image: FC<ImageProps> = ({ url, name, slug }) => {
  return (
    <div className={styles.image}>
      <div className={styles.imageEditButtons}>
        <EditMenu />
      </div>
      <Link to={`/images/${slug}`}>
        <img src={url} alt={name} loading="lazy" />{" "}
      </Link>
    </div>
  );
};
