import { FC } from "react";
import { GuestNav } from "./GuestNav";
import { useAppSelector } from "../../hooks/redux";
import { selectAuthentecatedState } from "../../redux/auth/selectors";
import { UserNav } from "./UserNav";

export const UserMenu: FC = () => {
  const isAuthenticated = useAppSelector(selectAuthentecatedState);

  return isAuthenticated ? <UserNav /> : <GuestNav />;
};
