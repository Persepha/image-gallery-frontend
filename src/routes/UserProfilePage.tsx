import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { useParams } from "react-router-dom";
import { userProfile } from "../redux/users/actionCreators";
import { Loader } from "../components/Loader";
import { Profile } from "../components";

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

  return (
    <>
      {error && <h1>{error}</h1>}
      {isLoading ? (
        <div className="ctr">
          <Loader />
        </div>
      ) : (
        profile && <Profile profile={profile} />
      )}
    </>
  );
};
