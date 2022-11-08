import { FC } from "react";

import styles from "./Gallery.module.css";
import { GalleryProps } from "./Gallery.props";
import { Image } from "../Image";

export const Gallery: FC<GalleryProps> = ({ images }) => {
  return (
    <div className={styles.masonry}>
      {images.map((image) => (
        <Image key={image.id} name={image.name} url={image.url} />
      ))}
    </div>
  );
};
