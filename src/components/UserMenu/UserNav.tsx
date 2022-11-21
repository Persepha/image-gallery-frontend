import { FC } from "react";
import { NavbarButton } from "../NavbarButton";
import { useAppDispatch } from "../../hooks/redux";
import { logout } from "../../redux/auth/actionCreators";

import { CreateButton } from "../EditMenu/CreateButton";

export const UserNav: FC = () => {
  const dispatch = useAppDispatch();

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <>
      <li>
        <CreateButton />
      </li>
      <li>
        <NavbarButton onClick={handleLogout}>Logout</NavbarButton>
      </li>
    </>
  );
};
