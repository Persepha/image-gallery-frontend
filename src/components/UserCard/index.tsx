import React, { FC } from "react";
import { UserCardProps } from "./UserCard.props";
import styles from "./UserCard.module.css";
import { Link } from "react-router-dom";

export const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <Link to={`/users/${user.username}`}>
      <div className={styles.profile}>
        <div className={styles.avatarSection}>
          <img src={user.avatar} className={styles.avatar} alt="User_avatar" />
        </div>
        <div className={styles.info}>
          {user.is_staff && <span className="highlight">staff</span>}
          <div className={styles.username}>@{user.username}</div>
        </div>
      </div>
    </Link>
  );
};
