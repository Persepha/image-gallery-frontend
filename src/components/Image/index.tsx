import React, { FC } from "react";

import { Link, useNavigate } from "react-router-dom";

import styles from "./Image.module.css";
import { ImageProps } from "./Image.props";
import { EditMenu } from "../EditMenu";
import cn from "classnames";
import { setSearchValue } from "../../redux/filter/slice";
import { useAppDispatch } from "../../hooks/redux";

export const Image: FC<ImageProps> = ({
  url,
  name,
  slug,
  isEditable,
  tags,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function tagClickHandler(tagTitle: string) {
    dispatch(setSearchValue(tagTitle));
    navigate("/");
  }

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

      <div className={cn(styles.tagsContainer)}>
        {tags.map((tag) => (
          <div key={tag.id}>
            <span
              className={styles.highlight}
              onClick={() => tagClickHandler(tag.title)}
            >
              {tag.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
