import { FC, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";

import { selectAuthentecatedState } from "../redux/auth/selectors";
import { Profile } from "../components";
import { personalUserProfile } from "../redux/users/actionCreators";
import { StatusMessage } from "../components/StatusMessage";

export const PersonalProfilePage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { error, isLoading, profile } = useAppSelector(
    (state) => state.userProfileReducer
  );

  const isAuthenticated = useAppSelector(selectAuthentecatedState);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated]);

  const getPersonalProfile = () => {
    dispatch(personalUserProfile());
  };

  useEffect(() => {
    getPersonalProfile();
  }, []);

  return error || !profile || isLoading ? (
    <StatusMessage error={error} errorMessage={error} isLoading={isLoading} />
  ) : (
    <Profile profile={profile} />
  );
};
