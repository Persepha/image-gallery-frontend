import { FC } from "react";

import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";
import cn from "classnames";

import styles from "./EditMenu.module.css";
import { EditMenuProps } from "./EditMenu.props";
import { deleteGalleryImage } from "../../redux/gallery/actionCreators";

export const DeleteButton: FC<EditMenuProps> = ({ slug }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const deleteImage = async () => {
    if (window.confirm("Are you sure you want to delete the image?")) {
      const result = await dispatch(deleteGalleryImage({ slug }));

      if (deleteGalleryImage.fulfilled.match(result)) {
        return navigate("/");
      }
    }
  };

  return (
    <div className={cn(styles.item, styles.deleteItem)} onClick={deleteImage}>
      <svg
        className={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#F4442E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </div>
  );
};
