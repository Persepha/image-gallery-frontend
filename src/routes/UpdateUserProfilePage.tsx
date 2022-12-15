import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { useNavigate } from "react-router-dom";
import { selectAuthentecatedState } from "../redux/auth/selectors";
import { personalUserProfile } from "../redux/users/actionCreators";
import { Loader } from "../components/Loader";
import { UpdateProfile } from "../components/Forms/UpdateProfile";

export const UpdateUserProfilePage: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isLoading, profile, error } = useAppSelector(
    (state) => state.userProfileReducer
  );

  const isAuthenticated = useAppSelector(selectAuthentecatedState);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    dispatch(personalUserProfile());
  }, []);

  return (
    <>
      {isLoading && (
        <div className="ctr">
          <Loader />
        </div>
      )}
      {error && <h1>{error}</h1>}
      {profile && <UpdateProfile />}
    </>
  );
};
