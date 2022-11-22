import { FC } from "react";

import { ImageDetailProps } from "./ImageDetail.props";
import styles from "./ImageDetail.module.css";
import { EditMenu } from "../EditMenu";
import { useAppSelector } from "../../hooks/redux";

export const ImageDetail: FC<ImageDetailProps> = ({ imageDetail }) => {
  const { username, isStaff } = useAppSelector((state) => state.authReducer);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {(isStaff || username === imageDetail.owner_username) && (
          <EditMenu slug={imageDetail.slug} />
        )}

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
