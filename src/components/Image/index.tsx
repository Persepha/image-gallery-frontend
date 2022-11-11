import { FC } from "react";

import styles from "./Image.module.css";
import { ImageProps } from "./Image.props";
import { Link } from "react-router-dom";

export const Image: FC<ImageProps> = ({ url, name, slug }) => {
  return (
    <div className={styles.image}>
      <Link to={`/images/${slug}`}>
        <img src={url} alt={name} loading="lazy" />{" "}
      </Link>
    </div>
  );
};
