import { FC } from "react";

import { ImageDetailProps } from "./ImageDetail.props";
import styles from "./ImageDetail.module.css";

export const ImageDetail: FC<ImageDetailProps> = ({ imageDetail }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src={imageDetail.url}
          className={styles.image}
          alt={imageDetail.name}
        />
      </div>
      <div className={styles.info}>
        <h1>{imageDetail.name}</h1>
        <h3>by {imageDetail.owner_username}</h3>
        <div className={styles.tagsContainer}>
          {imageDetail.tags.map((tag) => (
            <div key={tag.id}>
              <span className={styles.highlight}>{tag.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
