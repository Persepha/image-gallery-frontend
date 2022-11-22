import { FC } from "react";

import styles from "./Image.module.css";
import { ImageProps } from "./Image.props";
import { Link } from "react-router-dom";
import { EditMenu } from "../EditMenu";

export const Image: FC<ImageProps> = ({ url, name, slug, isEditable }) => {
  return (
    <div className={styles.image}>
      {isEditable && (
        <div className={styles.imageEditButtons}>
          <EditMenu slug={slug} />
        </div>
      )}

      <Link to={`/images/${slug}`}>
        <img src={url} alt={name} loading="lazy" />{" "}
      </Link>
    </div>
  );
};
