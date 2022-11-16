import { FC, useEffect } from "react";
import { Login } from "../components";
import { useAppSelector } from "../hooks/redux";
import { selectAuthentecatedState } from "../redux/auth/selectors";
import { useNavigate } from "react-router-dom";

export const LoginPage: FC = () => {
  const navigate = useNavigate();

  const isAuthenticated = useAppSelector(selectAuthentecatedState);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  return <Login />;
};
