import { FC } from "react";
import { UsersProps } from "./Users.props";
import styles from "./Users.module.css";
import { UserCard } from "../UserCard";

export const Users: FC<UsersProps> = ({ users }) => {
  return (
    <div className={styles.usersGrid}>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};
