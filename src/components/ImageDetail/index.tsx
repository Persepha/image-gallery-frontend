import React, { FC } from "react";

import { ImageDetailProps } from "./ImageDetail.props";
import styles from "./ImageDetail.module.css";
import { EditMenu } from "../EditMenu";
import { useAppSelector } from "../../hooks/redux";
import { Link } from "react-router-dom";

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
        <div className={styles.imageName}>{imageDetail.name}</div>
        <div>
          <span className={styles.label}>by </span>
          <Link
            to={`/users/${imageDetail.owner_username}`}
            className={styles.username}
          >
            {imageDetail.owner_username}
          </Link>
        </div>
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
