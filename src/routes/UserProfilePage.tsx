import { FC, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { useParams } from "react-router-dom";

import { userProfile } from "../redux/users/actionCreators";
import { Profile } from "../components";
import { StatusMessage } from "../components/StatusMessage";

export const UserProfilePage: FC = () => {
  const dispatch = useAppDispatch();
  const { slug } = useParams();

  const { profile, error, isLoading } = useAppSelector(
    (state) => state.userProfileReducer
  );

  const getUserProfile = () => {
    if (slug) {
      dispatch(userProfile({ slug }));
    }
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  return error || !profile || isLoading ? (
    <StatusMessage error={error} errorMessage={error} isLoading={isLoading} />
  ) : (
    <Profile profile={profile} />
  );
};
