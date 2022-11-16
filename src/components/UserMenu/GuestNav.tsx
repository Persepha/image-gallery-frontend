import { FC } from "react";
import { NavbarButton } from "../NavbarButton";
import { Link } from "react-router-dom";

export const GuestNav: FC = () => {
  return (
    <>
      <li>
        <Link to="/login">
          <NavbarButton>Log in</NavbarButton>
        </Link>
      </li>
      <li>
        <NavbarButton>Sign up</NavbarButton>
      </li>
    </>
  );
};
