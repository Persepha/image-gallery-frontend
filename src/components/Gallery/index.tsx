import { FC } from "react";

import styles from "./Gallery.module.css";
import { GalleryProps } from "./Gallery.props";
import { Image } from "../Image";
import { useAppSelector } from "../../hooks/redux";

export const Gallery: FC<GalleryProps> = ({ images }) => {
  const { username, isStaff } = useAppSelector((state) => state.authReducer);

  return (
    <div className={styles.masonry}>
      {images.map((image) => (
        <Image
          key={image.id}
          name={image.name}
          slug={image.slug}
          url={image.url}
          tags={image.tags}
          isEditable={isStaff || username === image.owner_username}
        />
      ))}
    </div>
  );
};
