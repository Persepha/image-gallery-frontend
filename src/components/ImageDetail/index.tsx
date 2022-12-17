import React, { FC } from "react";

import { ImageDetailProps } from "./ImageDetail.props";
import styles from "./ImageDetail.module.css";
import { EditMenu } from "../EditMenu";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Link, useNavigate } from "react-router-dom";
import { setSearchValue } from "../../redux/filter/slice";

export const ImageDetail: FC<ImageDetailProps> = ({ imageDetail }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { username, isStaff } = useAppSelector((state) => state.authReducer);

  function tagClickHandler(event: React.MouseEvent) {
    const tagTitle = event.currentTarget.getAttribute("data-title");
    if (tagTitle) {
      dispatch(setSearchValue(tagTitle));
      navigate("/");
    }
  }

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
              <span
                className={styles.highlight}
                data-title={tag.title}
                onClick={tagClickHandler}
              >
                {tag.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
