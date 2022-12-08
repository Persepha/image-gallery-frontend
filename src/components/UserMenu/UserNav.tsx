import React, { FC, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { logout } from "../../redux/auth/actionCreators";

import { CreateButton } from "../EditMenu/CreateButton";
import { ProfileButton } from "../EditMenu/ProfileButton";

import styles from "./UserMenu.module.css";
import { Link } from "react-router-dom";

export const UserNav: FC = () => {
  const dispatch = useAppDispatch();
  const profileMenuRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { username, avatar } = useAppSelector((state) => state.authReducer);

  function handleLogout() {
    dispatch(logout());
  }

  type ProfileMenuClick = MouseEvent & {
    path: Node[];
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as ProfileMenuClick;

      if (
        profileMenuRef.current &&
        !_event.path.includes(profileMenuRef.current)
      ) {
        setIsOpen(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside);
  });

  return (
    <>
      <li>
        <CreateButton />
      </li>
      <li>
        <div ref={profileMenuRef}>
          <ProfileButton avatar={avatar!} onClick={() => setIsOpen(!isOpen)}>
            {isOpen && (
              <div className={styles.dropdown}>
                <div className={styles.dropdownContent}>
                  <div className={styles.user}>
                    <div
                      className={styles.userAvatar}
                      style={{ backgroundImage: `url(${avatar})` }}
                    ></div>
                    <span>@{username}</span>
                  </div>
                  <Link to="/profile/" className={styles.menuItem}>
                    <svg
                      className={styles.icon}
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    profile
                  </Link>
                  <div className={styles.menuItem}>
                    <svg
                      className={styles.icon}
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="4" y1="21" x2="4" y2="14"></line>
                      <line x1="4" y1="10" x2="4" y2="3"></line>
                      <line x1="12" y1="21" x2="12" y2="12"></line>
                      <line x1="12" y1="8" x2="12" y2="3"></line>
                      <line x1="20" y1="21" x2="20" y2="16"></line>
                      <line x1="20" y1="12" x2="20" y2="3"></line>
                      <line x1="1" y1="14" x2="7" y2="14"></line>
                      <line x1="9" y1="8" x2="15" y2="8"></line>
                      <line x1="17" y1="16" x2="23" y2="16"></line>
                    </svg>
                    edit
                  </div>
                  <div className={styles.menuItem} onClick={handleLogout}>
                    <svg
                      className={styles.icon}
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 3h6v18h-6M10 17l5-5-5-5M13.8 12H3" />
                    </svg>
                    log out
                  </div>
                </div>
              </div>
            )}
          </ProfileButton>
        </div>
      </li>
    </>
  );
};
