import { FC } from "react";
import styles from "./ProfileButton.module.css";
import { ProfileButtonProps } from "./ProfileButton.props";

export const ProfileButton: FC<ProfileButtonProps> = ({ avatar, ...props }) => {
  return (
    <div
      className={styles.profileButton}
      style={{ backgroundImage: `url(${avatar})` }}
      onClick={props.onClick}
      {...props}
    >
      {props.children}
    </div>
  );
};
