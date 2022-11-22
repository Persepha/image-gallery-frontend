import { FC, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";

import { selectAuthentecatedState } from "../redux/auth/selectors";
import { NewImage } from "../components";
import { galleryImage } from "../redux/gallery/actionCreators";
import { Loader } from "../components/Loader";

export const UpdateImagePage: FC = () => {
  const dispatch = useAppDispatch();
  const { slug } = useParams();
  const navigate = useNavigate();

  const { error, isLoading, imageDetail } = useAppSelector(
    (state) => state.galleryImageDetailReducer
  );

  const isAuthenticated = useAppSelector(selectAuthentecatedState);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated]);

  const getImageDetail = () => {
    if (slug) {
      dispatch(galleryImage({ slug }));
    }
  };

  useEffect(() => {
    getImageDetail();
  }, []);

  return (
    <>
      {isLoading && (
        <div className="ctr">
          <Loader />
        </div>
      )}
      {error && <h1>{error}</h1>}
      {imageDetail && (
        <NewImage isUpdateImage={true} imageDetail={imageDetail} />
      )}
    </>
  );
};
