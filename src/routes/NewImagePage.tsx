import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import { selectAuthentecatedState } from "../redux/auth/selectors";
import { NewImage } from "../components";

export const NewImagePage: FC = () => {
  const navigate = useNavigate();

  const isAuthenticated = useAppSelector(selectAuthentecatedState);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated]);

  return <NewImage />;
};
