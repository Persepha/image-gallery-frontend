import React, { FC } from "react";

import styles from "./Profile.module.css";
import { ProfileProps } from "./Profile.props";

export const Profile: FC<ProfileProps> = ({ profile }) => {
  const get_formatted_date = () => {
    const date = new Date(profile.date_joined);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className={styles.profileSection}>
      <div className={styles.profile}>
        <div className={styles.avatarSection}>
          <img
            src={profile.avatar}
            className={styles.avatar}
            alt="User_avatar"
          />
        </div>

        <div className={styles.info}>
          <div className={styles.username}>@{profile.username}</div>

          {profile.is_staff && (
            <div>
              <span className="highlight">staff</span>
            </div>
          )}
          <div>
            <span className={styles.label}>joined: </span>
            {get_formatted_date()}
          </div>
        </div>
      </div>
    </div>
  );
};
