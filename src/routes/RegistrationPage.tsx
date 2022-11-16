import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import { selectAuthentecatedState } from "../redux/auth/selectors";
import { Registration } from "../components";

export const RegistrationPage: FC = () => {
  const navigate = useNavigate();

  const isAuthenticated = useAppSelector(selectAuthentecatedState);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  return <Registration />;
};
